
  # RADAR — Inteligência Estratégica de IA na Educação

  Publicação recorrente que transforma movimentos de mercado, concorrência,
  pesquisa, tecnologia e regulação em sinais, padrões, riscos e oportunidades
  para produtos educacionais.

  Hub de IA — Iônica & FTD Com Você.

  ## Rodando o projeto

  O projeto usa **pnpm** (há `pnpm-lock.yaml` e `pnpm-workspace.yaml`);
  instalar com npm ignora o lockfile.

  ```bash
  pnpm install      # instala as dependências
  pnpm run dev      # servidor de desenvolvimento
  pnpm run build    # build de produção em dist/
  pnpm run preview  # serve o build localmente
  ```

  `node_modules/` e `dist/` não são versionados — o primeiro vem do
  `pnpm install`, o segundo do `pnpm run build`.

  ## Editorial

  A doutrina editorial vigente (posicionamento, função de cada seção, regra
  antirredundância, higiene de janela e checklist final) está em
  `src/imports/pasted_text/radar-ia-educacao.md`.

  ## Deploy

  Build via Vite e publicação automática no GitHub Pages a cada push na `main`.
  O `base` do Vite é relativo (`./`), então o site funciona em qualquer caminho
  sem precisar de alteração de código se o repositório for renomeado.
