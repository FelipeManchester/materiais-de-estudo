# Estudo

Repositório pessoal de material de estudo sobre desenvolvimento de software, em **português (pt-BR)**.

Cada trilha cobre um tema técnico em profundidade, do conceito teórico até a prática — pensado tanto pra estudo guiado (lendo do início ao fim) quanto pra consulta futura (voltar num tópico específico quando precisar).

## Como usar

Todo material é escrito em **HTML** — sem build, sem servidor, sem dependência externa (CDN). CSS e JS ficam centralizados em [styles.css](styles.css) e [scripts.js](scripts.js) na raiz, compartilhados por todos os arquivos. Por isso o uso pretendido é sempre com o **repositório clonado inteiro** (não um `.html` avulso fora da pasta) — depois disso, é só abrir qualquer arquivo direto no navegador.

```bash
git clone https://github.com/<seu-usuario>/estudo.git
cd estudo
# abra qualquer arquivo .html da trilha desejada direto no navegador
```

Cada arquivo tem um sumário lateral com links para as seções da página, e navegação **"anterior" / "próximo"** no topo/fim do sumário pra seguir a trilha em ordem.

## Trilhas disponíveis

### [`api-rest/`](api-rest/) — API REST

Teoria, protocolo HTTP, design de API e decisões de stack, na ordem recomendada de leitura:

1. [Fundamentos de API REST](api-rest/01-fundamentos-rest.html) — o que é REST, contexto histórico (tese de Fielding), as 6 restrições arquiteturais, Richardson Maturity Model.
2. [HTTP na prática](api-rest/02-http-na-pratica.html) — ciclo requisição/resposta, métodos HTTP, códigos de status, headers relevantes.
3. [Design de recursos e URIs](api-rest/03-design-de-recursos-e-uris.html) — convenções de nomeação, aninhamento, filtros, paginação, ordenação.
4. [Escolha de stack](api-rest/04-escolha-de-stack.html) — comparativo entre Node.js, Python, Java, C#/.NET, Go e outras opções de mercado.
5. [Primeira API funcional](api-rest/05-primeira-api-funcional.html) — camadas de uma API, roteamento, persistência, validação, tratamento de erros e middlewares, de forma independente de stack.

Próximos materiais planejados (ver seção "O que vem a seguir" no fim do último arquivo da trilha): autenticação e autorização, boas práticas de produção.

### [`node-express/`](node-express/) — Node + Express + Postgres

Trilha específica de stack (complementa a API REST, que é conceitual/independente de stack). Guias práticos de configuração e implementação usando Node.js, Express e Postgres via Docker:

1. [Configurando o ambiente](node-express/01-node-express.html) — instalar Node e Docker, subir Postgres com Docker Compose, preparar o projeto (`.env`, dependências) antes de escrever código.
2. [Projeto: API de uma academia](node-express/02-projeto-academia.html) — domínio fictício (Studio Fit) usado como base prática pros próximos materiais: entidades, regras de negócio, mapa de endpoints.
3. [Schema do banco de dados](node-express/03-schema-do-banco.html) — as entidades do projeto viram tabelas Postgres: tipos de dado, chaves estrangeiras, `CHECK`, e um índice único parcial pra resolver a regra de matrícula duplicada direto no banco.
4. [Primeiro endpoint funcional](node-express/04-primeiro-endpoint-funcional.html) — servidor Express conectado no Postgres via `pg`, `GET`/`POST /alunos` de verdade, query parametrizada contra SQL injection, teste manual com `curl`.
5. [CRUD completo: Instrutor e Aula](node-express/05-crud-instrutor-aula.html) — projeto reorganizado em camadas (`routes/`, `repositories/`), Express Router, CRUD completo das duas entidades, e a Regra 3 (conflito de agenda) implementada com o operador `OVERLAPS` do Postgres.
6. [Matrícula e suas regras](node-express/06-matricula-e-regras.html) — a entidade que liga aluno e aula: `JOIN` entre tabelas, Regra 1 (capacidade máxima) no código, Regra 2 (duplicidade) capturando erro do banco, Regra 4 (cancelamento nunca é `DELETE`).
7. [Autenticação com JWT](node-express/07-autenticacao-jwt.html) — login de aluno com senha em hash (bcrypt), emissão e verificação de token JWT, e proteção das rotas de matrícula pra cada aluno só mexer nas próprias.
8. [Refresh token](node-express/08-refresh-token.html) — access token curto + refresh token longo guardado em hash no banco, rotação a cada uso com detecção de reuso, e logout de verdade (revogação).
9. [Segurança de borda](node-express/09-seguranca-de-borda.html) — rate limit contra força bruta no login (`429`), headers de segurança com `helmet`, CORS (o que é e o que não é), limite de tamanho de body e a ordem correta dos middlewares.
10. [Papéis e autorização](node-express/10-papeis-e-autorizacao.html) — matriz de permissões por papel (aluno/instrutor/admin), login de instrutor, papel dentro do JWT, middleware `autorizar` como fábrica de middleware, e posse do recurso onde papel não basta.

## Estrutura do repositório

```
estudo/
├── README.md
├── CLAUDE.md          # guia de convenções pra quem (ou o que) for gerar novo material aqui
├── styles.css          # CSS compartilhado por toda a trilha
├── scripts.js          # JS compartilhado por toda a trilha
├── api-rest/
│   ├── 01-fundamentos-rest.html
│   ├── 02-http-na-pratica.html
│   ├── 03-design-de-recursos-e-uris.html
│   ├── 04-escolha-de-stack.html
│   └── 05-primeira-api-funcional.html
└── node-express/
    ├── 01-node-express.html
    ├── 02-projeto-academia.html
    ├── 03-schema-do-banco.html
    ├── 04-primeiro-endpoint-funcional.html
    ├── 05-crud-instrutor-aula.html
    ├── 06-matricula-e-regras.html
    ├── 07-autenticacao-jwt.html
    ├── 08-refresh-token.html
    ├── 09-seguranca-de-borda.html
    └── 10-papeis-e-autorizacao.html
```

Novas trilhas de estudo entram como novos diretórios na raiz, seguindo o mesmo padrão: arquivos HTML numerados em ordem de leitura.

## Sobre este material

Escrito com apoio de IA (Claude Code) a partir de perguntas e revisão ativa — não é conteúdo gerado e publicado sem curadoria. `CLAUDE.md` documenta as convenções seguidas (formato HTML, tom didático, estrutura de navegação) pra manter consistência entre os materiais.
