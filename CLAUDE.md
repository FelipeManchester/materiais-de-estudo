# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## O que é este repositório

Repositório de **material de estudo pessoal**, não um projeto de software. Não há código de aplicação, build, lint ou testes — apenas arquivos **HTML** com conteúdo teórico/didático em **português (pt-BR)**, feitos pra abrir direto no navegador. Cada arquivo é uma aula/parte de uma trilha de aprendizado sobre um tema técnico. O repositório inteiro funciona como uma trilha só, pensado pra ser clonado/aberto como projeto — não como arquivos `.html` avulsos e isolados entre si (por isso CSS/JS são compartilhados, ver seção seguinte).

Trilhas atuais:
- **API REST** (diretório `api-rest/`) — conceitual, independente de stack. Começa em [api-rest/01-fundamentos-rest.html](api-rest/01-fundamentos-rest.html) (teoria e contexto histórico: o que é REST, tese de Fielding, as 6 restrições arquiteturais, Richardson Maturity Model).
- **Node + Express** (diretório `node-express/`) — trilha de stack específica, complementar à API REST. Guias práticos (setup de ambiente, implementação) usando Node.js + Express + Postgres, a stack escolhida pelo usuário. Ver [[relação entre trilhas]] abaixo.

### Relação entre trilha conceitual e trilhas de stack

A trilha `api-rest/` deve permanecer **agnóstica de stack** — a parte 4 (`04-escolha-de-stack.html`) compara opções de mercado mas não fixa uma, e a parte 5 (`05-primeira-api-funcional.html`) explica conceitos (camadas, roteamento, persistência) sem código de nenhuma linguagem específica, de propósito: o usuário quer que esse material sirva de referência não importa a stack usada no momento, mesmo que troque no futuro.

Detalhes específicos de uma stack (comandos, bibliotecas, sintaxe) vão em trilhas próprias por stack (ex: `node-express/`), linkadas a partir do card correspondente em `04-escolha-de-stack.html`. Ao criar uma nova trilha de stack, adicionar o link no card da stack em `04-escolha-de-stack.html` apontando pro primeiro arquivo da nova trilha.

## Formato: HTML, não Markdown

Usuário prefere ler material de estudo em HTML no navegador — Markdown puro ficou ruim de ler. **Todo novo material desta trilha (e trilhas futuras) deve ser escrito em HTML**, não Markdown.

- CSS e JS são **compartilhados**, centralizados em [styles.css](styles.css) e [scripts.js](scripts.js) na raiz do repositório — não embutidos em cada arquivo. Todo `.html` dentro de um diretório de trilha referencia os dois com caminho relativo `../`:
  ```html
  <link rel="stylesheet" href="../styles.css">
  <script src="../scripts.js" defer></script>
  ```
  Sem CDN, sem build step — só arquivos locais do próprio repositório. Isso não quebra o "abrir direto no navegador": o repositório é clonado/aberto como projeto (não arquivo `.html` avulso fora da pasta), então os caminhos relativos sempre resolvem.
- Ao criar um componente visual novo (card, tabela colorida, callout, etc.), adicionar a classe no `styles.css` compartilhado, não num `<style>` dentro do `.html` — mantém tudo num lugar só pra editar depois. Reaproveitar classes já existentes (`.callout`, `.warn`, `.rule`, `.example`, `.badge`, etc.) sempre que der, antes de criar uma nova.
- Suportar tema claro/escuro via `prefers-color-scheme` (já resolvido no `styles.css`, não precisa repetir por arquivo).
- Usar [api-rest/01-fundamentos-rest.html](api-rest/01-fundamentos-rest.html) como referência de estrutura ao criar os próximos arquivos: sumário lateral (`nav.toc`) com âncoras `id` por seção, tabelas comparativas, blockquotes/callouts para destaques, seção final "O que vem a seguir".

## Convenção de estrutura

- Cada trilha/tema vive em seu próprio diretório (ex: `api-rest/`).
- Arquivos numerados em sequência (`01-`, `02-`...) representam a ordem de leitura/aprendizado, não a ordem de criação cronológica de commits.
- O final de cada arquivo costuma ter uma seção "O que vem a seguir" listando os próximos tópicos planejados na sequência — **use essa seção como guia** ao criar o próximo material da trilha, para manter continuidade e não repetir conteúdo já coberto.
- Navegação entre arquivos, no `nav.toc`: link `.toc-prev` no topo apontando pro arquivo anterior (se houver) e link `.toc-next` no fim apontando pro próximo (se já existir). **Ao criar o arquivo N+1, sempre voltar no arquivo N e adicionar/atualizar o `.toc-next` linkando pra ele** — arquivo mais recente da trilha fica sem `.toc-next` até o seguinte ser criado.
- Todo arquivo tem um toggle pra ocultar/reabrir o `nav.toc` — dá mais espaço horizontal pro conteúdo (importante pros blocos `<pre><code>` de comando/SQL/JS, que já usam `overflow-x: auto`). CSS e comportamento (`addEventListener`) já vêm prontos em `styles.css`/`scripts.js` — cada arquivo novo só precisa ter o markup, sem `onclick` inline: botão `<button id="toc-show-btn">&#9776; Sumário</button>` logo após `<body>`, e `<button class="toc-hide-btn">Ocultar &times;</button>` como primeiro filho de `<nav class="toc">`. Usar [api-rest/01-fundamentos-rest.html](api-rest/01-fundamentos-rest.html) como referência exata do markup ao criar arquivo novo.

## README.md

Repositório é público no GitHub. `README.md` na raiz lista as trilhas e arquivos disponíveis, em ordem. **Ao criar um novo arquivo de material (ou uma nova trilha), atualizar o README** — adicionar o link na lista da trilha correspondente, ou criar a seção da nova trilha.

## Ao criar/editar material de estudo

- Manter o mesmo tom didático já estabelecido: explica o "porquê" antes do "como", contextualiza historicamente quando relevante, evita jargão sem explicar.
- Manter português, HTML semântico (h2/h3, table, blockquote) — não gerar Markdown solto.
- Cada arquivo deve ser autocontido o suficiente para reler depois, mas pode referenciar conceitos de arquivos anteriores da mesma trilha assumindo que já foram lidos.
- Não adiantar conteúdo de tópicos futuros já listados na seção "O que vem a seguir" do arquivo anterior — cada arquivo cobre seu escopo.

### Blocos de código são instrução de edição, não só ilustração

Quando um bloco de código representa uma **alteração em arquivo que já existe** no projeto do leitor, o comentário `// routes/aulas.js` no topo **não é suficiente**. Sem localização explícita, o leitor compara o bloco (estado final) com o próprio arquivo, não sabe o que é linha nova, alterada ou removida, e trava.

- Antes do bloco, escrever a instrução em forma de passo de tutorial: **qual arquivo**, **onde dentro dele** (função, rota, bloco), e **a ação** — criar, alterar ou deletar. Ex: "Vá em `routes/aulas.js`, na rota `POST /:id/matriculas`. Apague a validação de `aluno_id` do body (as duas checagens, 400 e 422) e passe `aluno_id: req.alunoId` no `matriculasRepository.criar`."
- Dentro do bloco, sinalizar o que mudou (comentário `// NOVO`, `// ALTERADO`, `// REMOVER`, ou trecho `// ...resto igual` pro que não muda) em vez de despejar o trecho já-pronto.
- **Não recriar o arquivo inteiro no HTML** — fica gigante e sem necessidade. Mostrar só o trecho afetado, com a localização explícita. Arquivo completo só quando o arquivo é novo.
- **Instrução em prosa não substitui a linha no bloco.** Se o passo altera a linha de declaração/assinatura (ex: adicionar middleware em `router.patch('/:id', ...)`), essa linha entra no diff marcada, mesmo que o foco do passo seja outra alteração mais abaixo. E manter consistência entre passos parecidos: mostrar a assinatura numa rota e omitir na seguinte é pior do que omitir nas duas.
- Vale pra toda trilha, não só `node-express/`.
