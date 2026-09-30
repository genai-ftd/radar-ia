---
name: fact-check
description: Checagem de fatos, datas, números e afirmações de uma edição do Radar antes de publicar. Use sempre que o usuário pedir /fact-check, pedir para revisar ou verificar o conteúdo, e antes de todo deploy que traga conteúdo novo ou alterado na edição viva.
---

# Fact-check do Radar

Nenhuma edição vai ao ar sem esta checagem. Ela existe porque a #12 publicou
afirmações que não se sustentavam: "ninguém no Brasil publicou evidência de
impacto" (existia o ensaio da Letrus avaliado pelo J-PAL) e "os primeiros
ensaios de tutor de IA" (já havia ensaios anteriores). As duas nasceram do
mesmo jeito: a busca olhou só a janela da edição e a conclusão foi escrita
antes de alguém tentar refutá-la.

O protocolo editorial completo está na seção 12 de
`src/imports/pasted_text/radar-ia-educacao.md`. Esta skill é a execução dele.

## 1. Levantar o que precisa ser checado

```bash
python3 .claude/skills/fact-check/scripts/extrair_afirmacoes.py <scratchpad>/fact-check
```

O script lê a edição viva em `src/app/App.tsx` e gera:

- `afirmacoes.csv`: uma linha por frase checável, com seção, cartão, campo,
  tipos detectados e a fonte do cartão. As colunas `leitura`, `status` e
  `acao` vêm vazias para você preencher.
- `numeros.md`: cada número com todas as frases em que aparece. Serve para
  conferir se o mesmo dado está igual em todas as seções.
- `resumo.txt`: a janela da edição, lida do cabeçalho, e a contagem por tipo.

Se a checagem for de uma alteração pontual, priorize as frases que mudaram
(`git diff src/app/App.tsx`), mas rode a varredura de absolutos na edição
inteira: uma frase nova pode contradizer outra que já estava lá.

## 2. Checar cada tipo

Tipos que o script marca e como verificar cada um:

| Tipo | Como verificar |
| --- | --- |
| `DATA` | Data do **fato** na fonte primária, não a data da repercussão. Está dentro da janela? Se for anterior, a frase precisa datar o fato explicitamente ("ensaio de 2018–2020"). Confira também se o fato já saiu em edição anterior (grep no `App.tsx`). |
| `NUMERO` | Bata o número exato com a fonte (em estudo, o artigo ou o resumo oficial, nunca só a matéria que o repercutiu), com unidade e arredondamento ("cerca de" só quando a fonte arredonda). Use `numeros.md` para garantir que o mesmo dado é igual em todas as seções. |
| `ABSOLUTO` / `AUSENCIA` | Faça a **busca contrária**: pelo menos duas buscas tentando provar o oposto, **sem limite de data**, em português e em inglês, mais as bases de evidência (J-PAL, EdWorkingPapers, Banco Mundial, BID, 3ie, NBER). Resultado: manter com fonte, delimitar ("não localizamos", "entre os concorrentes acompanhados", "na janela") ou reescrever. "Primeiro", "único" e "nenhum" nunca entram sem essa busca. |
| `CITACAO` | Texto exato na fonte e atribuição correta. Paráfrase não vai entre aspas. |
| `PRODUTO_PROPRIO` | Nada sobre produto, dado ou contrato da casa entra como fato sem fonte interna. Reescreva como hipótese a verificar ("se hoje medimos só X…; vale confirmar com o time de dados"). |

Além dos tipos marcados, cheque sempre:

- **Entidades.** Nome de empresa, grupo controlador, cargo, autores de
  estudo, membros de aliança. Escreva como a fonte escreve. Não deduza (ex.:
  quem compõe uma aliança só entra se uma fonte nomear os membros).
- **Coerência interna.** Toda generalização ("todos oferecem", "vários
  concorrentes") contra os cartões da própria edição. Na #12, "todos
  oferecem tira-dúvidas" contradizia o cartão do Poliedro.
- **Links.** Todo "Ver fonte" abre a página que sustenta o cartão.

## 3. Acesso às fontes

1. Leia a fonte primária com WebFetch.
2. Se o proxy bloquear o domínio, use WebSearch e exija **duas fontes
   independentes** que digam a mesma coisa. Marque a leitura como
   `lido por busca`.
3. Nunca complete com memória um dado que a fonte não mostrou.

Vocabulário da coluna `status`:

- `verificado (primária)`: lido na fonte original.
- `verificado (duas fontes)`: fonte original bloqueada, duas independentes batem.
- `lido por busca`: só trechos de busca; precisa aparecer no relatório.
- `inferido`: dedução nossa; reescrever ou sinalizar.
- `corrigido` / `removido`: o que mudou no texto.

## 4. Passada adversarial

Para cada empresa, pesquisador, órgão ou jornalista citado, pergunte: **o que
ele contestaria nesta frase?** Corrija o que não se sustenta. Os casos mais
comuns são efeito exagerado, data trocada, produto descrito pelo nome e não
pelo que faz, e ausência que só vale para a lista que acompanhamos.

## 5. Relatório e trava de publicação

Salve `relatorio-fact-check.md` no scratchpad e mostre no chat, antes do
deploy:

- quantas afirmações foram checadas, verificadas, corrigidas e removidas;
- a lista do que ficou `lido por busca` ou `inferido`, com o motivo;
- todas as ausências e superlativos que restaram, com a busca contrária que
  os sustenta;
- as correções feitas, em uma linha cada.

**Não publique sem o OK do responsável pela edição.** Correção de erro já
publicado é a exceção: pode subir na hora, desde que seja informada em
seguida.

## 6. Depois de corrigir

1. `npm run build` e conferência da página no navegador.
2. Registre cada erro encontrado depois de publicado no "REGISTRO DE ERROS"
   da seção 12 do guia editorial, com a causa.
3. Se um padrão de erro se repetir, acrescente a regra correspondente aqui.

## Erros que esta skill existe para pegar

| Erro | Exemplo real | Onde a checagem pega |
| --- | --- | --- |
| Ausência afirmada só com busca na janela | "Ninguém no Brasil publicou evidência" (#12) | Busca contrária sem limite de data |
| Superlativo sem antecedentes | "Os primeiros ensaios de tutor de IA" (#12) | Busca contrária |
| Generalização que contradiz a edição | "Todos oferecem tira-dúvidas" (#12) | Coerência interna |
| Fato sobre o nosso produto sem fonte | "O produto depende de um único fornecedor" (#12) | `PRODUTO_PROPRIO` |
| Entidade deduzida | Membros de uma aliança citados sem fonte que os nomeie | Checagem de entidades |
| Data da repercussão no lugar da data do fato | Anúncio de 9/set tratado como da janela 11–30/set | `DATA` |
| Resultado de estudo lido só na repercussão | "Boa parte da vantagem sumiu em uma semana" (#12; foi medida uma semana depois) e p = 0,044 no lugar de 0,015 | `NUMERO`: abrir o artigo ou o resumo oficial |
| Desenho do estudo deduzido | "Sorteou 18 escolas" (eram séries) e "comparado com a plataforma sem IA" (o controle usava outras ferramentas) | Entidades: unidade de sorteio e grupo de controle vêm do artigo |
| Paráfrase que vira fato | "Muitas conversas fugiram do assunto" (#12), que o artigo não diz | `CITACAO` vale também sem aspas |
