# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## O que é este repositório

Repositório de **material de estudo pessoal**, não um projeto de software. Não há código de aplicação, build, lint ou testes — apenas arquivos **HTML autocontidos** com conteúdo teórico/didático em **português (pt-BR)**, feitos pra abrir direto no navegador. Cada arquivo é uma aula/parte de uma trilha de aprendizado sobre um tema técnico.

Trilha atual: **API REST** (diretório `api-rest/`), começando por [api-rest/01-fundamentos-rest.html](api-rest/01-fundamentos-rest.html) — teoria e contexto histórico (o que é REST, origem na tese de Fielding, as 6 restrições arquiteturais, Richardson Maturity Model).

## Formato: HTML, não Markdown

Usuário prefere ler material de estudo em HTML no navegador — Markdown puro ficou ruim de ler. **Todo novo material desta trilha (e trilhas futuras) deve ser escrito em HTML**, não Markdown.

- Cada arquivo `.html` é autocontido: CSS embutido em `<style>` no próprio `<head>`, sem dependências externas (sem CDN, sem build step). Deve abrir direto com duplo-clique/`file://`.
- Suportar tema claro/escuro via `prefers-color-scheme`.
- Usar [api-rest/01-fundamentos-rest.html](api-rest/01-fundamentos-rest.html) como referência de estilo/estrutura ao criar os próximos arquivos: sumário lateral (`nav.toc`) com âncoras `id` por seção, tipografia legível, tabelas comparativas estilizadas, blockquotes/callouts para destaques, seção final "O que vem a seguir".

## Convenção de estrutura

- Cada trilha/tema vive em seu próprio diretório (ex: `api-rest/`).
- Arquivos numerados em sequência (`01-`, `02-`...) representam a ordem de leitura/aprendizado, não a ordem de criação cronológica de commits.
- O final de cada arquivo costuma ter uma seção "O que vem a seguir" listando os próximos tópicos planejados na sequência — **use essa seção como guia** ao criar o próximo material da trilha, para manter continuidade e não repetir conteúdo já coberto.
- Navegação entre arquivos, no `nav.toc`: link `.toc-prev` no topo apontando pro arquivo anterior (se houver) e link `.toc-next` no fim apontando pro próximo (se já existir). **Ao criar o arquivo N+1, sempre voltar no arquivo N e adicionar/atualizar o `.toc-next` linkando pra ele** — arquivo mais recente da trilha fica sem `.toc-next` até o seguinte ser criado.

## README.md

Repositório é público no GitHub. `README.md` na raiz lista as trilhas e arquivos disponíveis, em ordem. **Ao criar um novo arquivo de material (ou uma nova trilha), atualizar o README** — adicionar o link na lista da trilha correspondente, ou criar a seção da nova trilha.

## Ao criar/editar material de estudo

- Manter o mesmo tom didático já estabelecido: explica o "porquê" antes do "como", contextualiza historicamente quando relevante, evita jargão sem explicar.
- Manter português, HTML semântico (h2/h3, table, blockquote) — não gerar Markdown solto.
- Cada arquivo deve ser autocontido o suficiente para reler depois, mas pode referenciar conceitos de arquivos anteriores da mesma trilha assumindo que já foram lidos.
- Não adiantar conteúdo de tópicos futuros já listados na seção "O que vem a seguir" do arquivo anterior — cada arquivo cobre seu escopo.
