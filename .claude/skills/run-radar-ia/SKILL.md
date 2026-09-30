---
name: run-radar-ia
description: Build, run, start, preview, screenshot and drive the Radar site (React + Vite). Use when asked to run the Radar, start the dev server, build it, take a screenshot of an edition or section, open an archived edition, check the page for errors or overflow, or verify a change in the real app before deploy.
---

O Radar é um site estático (React 18 + Vite 6 + Tailwind 4) com a edição
viva e o arquivo de edições em `src/app/App.tsx`. Um agente o dirige subindo
o `vite preview` (ou `vite dev`) e mandando comandos pelo stdin para
`.claude/skills/run-radar-ia/driver.mjs`, que controla um Chromium headless
via Playwright e salva screenshots em `/tmp/radar-shots/`.

Caminhos relativos à raiz do repositório.

## Pré-requisitos

Node 22 e pnpm já vêm no container. O Chromium do Playwright fica em
`/opt/pw-browsers/chromium`; **não** rode `playwright install`. O pacote
`playwright` é instalado fora do projeto, para não mexer no `pnpm-lock.yaml`
que o CI usa:

```bash
mkdir -p /tmp/radar-driver && cd /tmp/radar-driver && npm install --no-audit --no-fund playwright
```

## Setup e build

```bash
pnpm install
pnpm run build        # gera dist/; o aviso de chunk > 500 kB é esperado
```

Checagem de tipos (o repositório não tem tsconfig, por decisão do dono; passe
as opções na linha de comando):

```bash
npx tsc --noEmit --jsx react-jsx --skipLibCheck --moduleResolution bundler --module esnext --target es2022 --types vite/client --strict false src/app/App.tsx
```

## Run (agent path)

1. Suba o servidor em segundo plano e espere a porta responder. Use o
   `preview` para validar o build que vai para o deploy:

```bash
(setsid pnpm exec vite preview --port 4173 --strictPort > /tmp/radar-preview.log 2>&1 &)
timeout 30 bash -c 'until curl -sf http://localhost:4173/ >/dev/null; do sleep 0.5; done'
```

   Para iterar em conteúdo sem rebuild, use o dev server e aponte o driver
   para ele com `RADAR_URL`:

```bash
(setsid pnpm run dev --port 5173 --strictPort > /tmp/radar-dev.log 2>&1 &)
timeout 40 bash -c 'until curl -sf http://localhost:5173/ >/dev/null; do sleep 0.5; done'
```

2. Dirija a página com o driver (uma linha por comando):

```bash
node .claude/skills/run-radar-ia/driver.mjs <<'EOF'
open
shot capa
check
nav Experts
shot experts-menu
reveal
shot-el #recorrentes recorrentes
mode executiva
mode completa
archive 0
shot arquivo-11
back
viewport 390 844
open
shot capa-mobile
check
quit
EOF
```

```bash
RADAR_URL=http://localhost:5173/ node .claude/skills/run-radar-ia/driver.mjs <<'EOF'
open
check
shot capa-dev
quit
EOF
```

**Olhe as imagens** em `/tmp/radar-shots/` antes de declarar sucesso.
`check` imprime JSON com overflow horizontal, fontes carregadas, número de
seções, imagens quebradas, a janela da edição lida do cabeçalho e os erros
de console e de página. O esperado é `"overflow": false`,
`"fontes": ["Plus Jakarta Sans Variable"]`, `"secoes": 13` e `"erros": []`.

| comando | o que faz |
|---|---|
| `open [url]` | abre a URL (padrão `$RADAR_URL` ou `http://localhost:4173/`) e espera as fontes |
| `viewport W H` | cria uma página nova no tamanho dado; rode `open` de novo depois |
| `nav <rótulo>` | clica no item do menu da edição (`Insight`, `Resumo`, `Sinais`, …, `Arquivo`) |
| `section <id>` | rola até `#id` (`insight`, `resumo`, `movimentos`, `ausencias`, `recorrentes`, `concorrencia`, `benchmarks`, `aceleradores`, `experts`, `analise`, `hype`, `oportunidades`, `edicoes`) |
| `mode executiva\|completa` | troca o modo de leitura e mostra quantas seções ficaram |
| `archive N` | clica no N-ésimo "Abrir edição" do arquivo (0 = mais recente) |
| `back` | volta da edição arquivada para a atual |
| `reveal` | força as seções visíveis e esconde o cabeçalho fixo (use antes de `shot-el`) |
| `shot nome` / `fullpage nome` / `shot-el seletor nome` | screenshot da tela, da página inteira ou de um elemento |
| `text seletor` | imprime o texto do primeiro elemento que casa |
| `click seletor` | clica no primeiro elemento que casa (seletor do Playwright) |
| `check` | JSON de saúde da página (ver acima) |
| `wait ms` | espera |
| `quit` | fecha o navegador |

3. Pare os servidores pela porta:

```bash
lsof -ti:4173 -sTCP:LISTEN | xargs -r kill
lsof -ti:5173 -sTCP:LISTEN | xargs -r kill
```

## Invocação direta (mudanças de conteúdo)

A maior parte das mudanças mexe em texto da edição em `src/app/App.tsx`.
Depois de `pnpm run build` e do driver, rode o levantamento de afirmações
da skill `/fact-check` antes de publicar:

```bash
python3 .claude/skills/fact-check/scripts/extrair_afirmacoes.py /tmp/fact-check
```

## Run (human path)

```bash
pnpm run dev    # abre em http://localhost:5173/; Ctrl-C para parar
```

## Test

Não há suíte de testes. A checagem é `pnpm run build` + a checagem de tipos
acima + `check` do driver em 1440 px e 390 px + `archive` em pelo menos uma
edição arquivada.

## Deploy

Push na `main` dispara `.github/workflows/deploy.yml` (pnpm install, build,
GitHub Pages). O container não alcança o site publicado nem a API pública do
GitHub pelo proxy; confira o resultado com o conector do GitHub
(`actions_list`, `list_workflow_runs`, sem filtro de branch).

## Gotchas

- **Seções esmaecidas ou em branco nas capturas.** As seções entram com
  `whileInView` (motion): o que ainda não passou pela tela fica com
  `opacity: 0`, e logo depois de `nav` a seção ainda está no meio da
  animação. Use `reveal` (ou `wait 1000`) antes de `shot-el`/`fullpage`.
- **Cabeçalho fixo cobrindo o topo de `shot-el`.** O `reveal` também esconde
  o `<header>`.
- **`janela: null` no `check` em 390 px.** O bloco "Edição #N · datas" do
  cabeçalho é `hidden sm:flex`; a janela só é lida a partir de 640 px.
- **Só o botão "Abrir edição" navega no arquivo.** Clicar no texto do cartão
  não faz nada; `archive N` clica no botão.
- **Não adicione `playwright` ao `package.json`.** O CI instala com pnpm a
  partir do lockfile; o pacote fica em `/tmp/radar-driver`, e o driver o
  carrega de lá com `createRequire`.
- **O `chromium-cli` não existe neste container.** Por isso o driver
  próprio, com `executablePath` apontando para `/opt/pw-browsers/chromium`.

## Troubleshooting

- **O shell morre com exit 144 ao parar o servidor.** `pkill -f "vite preview"`
  (ou um `ps | awk` que casa `vite preview`) casa com a linha de comando do
  próprio shell do agente e o mata. Pare pela porta com `lsof … | xargs -r kill`.
- **`Error: Port 4173 is already in use` ao subir o preview.** Sobrou servidor de uma rodada
  anterior (o `--strictPort` falha em vez de trocar de porta). Libere com
  `lsof -ti:4173 -sTCP:LISTEN | xargs -r kill`.
- **`error TS5057: Cannot find a tsconfig.json file`.** O `tsc -p .` não
  funciona sem tsconfig; use o comando com as opções na linha de comando.
- **`curl` para o site publicado ou para `api.github.com` falha com 403 do
  proxy.** Rede de saída bloqueada; use o conector do GitHub para ver o deploy.
