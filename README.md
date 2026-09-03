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
11. [Cookie httpOnly](node-express/11-cookie-httponly.html) — refresh token fora do alcance do JavaScript (XSS), atributos do cookie (`HttpOnly`, `Secure`, `SameSite`, `Path`), CSRF e por que ele fica limitado aqui, e CORS com credenciais.
12. [Validação e erros de domínio](node-express/12-validacao-e-erros.html) — schemas com Zod em vez de `if (!campo)`, middleware `validar` para body/params/query, resposta `400` com erro por campo, e uma classe de erro de domínio traduzida em HTTP num lugar só.
13. [Transações e concorrência](node-express/13-transacoes-e-concorrencia.html) — a condição de corrida reproduzida de verdade, por que ela acontece com Node single-thread, `BEGIN`/`COMMIT` com client dedicado do pool, `SELECT ... FOR UPDATE` e *compare-and-set* na rotação de refresh.
14. [Migrations](node-express/14-migrations.html) — o `schema.sql` que diverge do banco (com o diagnóstico real do projeto), `node-pg-migrate`, migration de baseline num banco que já existe, `up`/`down`, e migrations no deploy.
15. [Soft-delete e limpeza](node-express/15-soft-delete-e-limpeza.html) — retenção dos refresh tokens (e por que apagar cedo demais fura a detecção de reuso), script agendado em vez de `setInterval`, e exclusão de instrutor que preserva o histórico.
16. [Testes automatizados](node-express/16-testes-automatizados.html) — Jest + supertest contra banco de verdade, `app.js` separado do `index.js`, banco de teste recriado por execução via migrations, e a guarda que recusa rodar fora de um banco `_test`.
17. [Integração contínua](node-express/17-integracao-continua.html) — GitHub Actions rodando lint e testes a cada push, Postgres como service container com health check, `npm ci` contra `npm install`, e branch protection como portão.
18. [Paginação, filtro e ordenação](node-express/18-paginacao-filtro-ordenacao.html) — envelope com metadados de página, `LIMIT`/`OFFSET` com total via window function, por que ordenar por placeholder não ordena (e não avisa), e whitelist de colunas contra SQL injection.
19. [Documentação com OpenAPI](node-express/19-documentacao-openapi.html) — spec derivada dos schemas Zod com `z.toJSONSchema`, `io: 'input'` para descrever a entrada, as 20 operações escritas em módulos de `paths`, Swagger UI servido em `/docs`, e o risco de a doc divergir do código.
20. [Logs e health check](node-express/20-logs-e-health-check.html) — log estruturado em JSON com `pino`, request id que atravessa serviços, redaction de senha e token, e a diferença entre liveness e readiness (e por que confundir as duas derruba a API).
21. [Empacotando com Docker](node-express/21-empacotando-com-docker.html) — `Dockerfile` e `.dockerignore`, ordem das camadas como cache, `USER node` em vez de root, `HEALTHCHECK` usando a rota da parte 20, e o que PID 1 faz com um SIGTERM sem handler.
22. [Deploy com HTTPS](node-express/22-deploy-com-https.html) — API no Render e Postgres no Neon, `trust proxy` para o rate limit contar o IP certo, `SameSite=None` para o cookie sobreviver ao front em outro domínio, `render.yaml` versionado e migrations como passo de deploy.

### [`git-na-pratica/`](git-na-pratica/) — Git

Trilha de **lista fechada**: 10 aulas definidas antes da primeira linha ser escrita, do zero até o nível que o mercado cobra no dia a dia (branch, Pull Request, conflito, histórico limpo, recuperação). O roteiro completo, com o que entra e o que fica de fora, está em [git-na-pratica/README.md](git-na-pratica/README.md).

1. [O que é Git e por que ele existe](git-na-pratica/01-o-que-e-git.html) — o problema que o controle de versão resolve, contexto histórico (Linux kernel, BitKeeper, Torvalds em 2005), centralizado vs distribuído, Git ≠ GitHub, commits como snapshots, instalação e `git config` inicial.

2. [Primeiro repositório: o ciclo básico](git-na-pratica/02-primeiro-repositorio.html) — criar o projeto, `git init`, as três áreas (working directory, staging, repositório) e por que o staging existe, `status`, `add`, `commit`, `log`, mensagem de commit, `.gitignore` e o caso do arquivo já rastreado (`git rm --cached`).

3. [Navegando o histórico e desfazendo](git-na-pratica/03-historico-e-desfazendo.html) — `log` com filtros, `show`, as três comparações do `diff`, referências (`HEAD~n`), os cinco níveis de desfazer (`restore`, `restore --staged`, `commit --amend`, `reset` nas três formas, `revert`), o critério `reset` vs `revert`, e a tabela "quero desfazer X, use Y".

4. [Branches: trabalhar em paralelo](git-na-pratica/04-branches.html) — branch como ponteiro (e por que isso a torna barata), `HEAD` de verdade, `switch -c`, o que muda na pasta ao trocar de branch, detached HEAD, merge fast-forward vs merge commit, `--no-ff`, e deletar branch com `-d`/`-D`.

5. [Conflitos de merge](git-na-pratica/05-conflitos-de-merge.html) — por que o Git resolve uns merges sozinho e outros não, conflito provocado de propósito, anatomia dos marcadores, resolução até o commit, `merge --abort`, `ours`/`theirs`, `merge.conflictStyle zdiff3` e o que reduz conflito num time.

6. [Repositório remoto: GitHub](git-na-pratica/06-repositorio-remoto.html) — conta e repositório, SSH vs HTTPS com token, `remote add`, `push -u`, o que é `origin/main`, um segundo clone simulando um colega, `fetch` vs `pull`, `pull --rebase`, push rejeitado por non-fast-forward e branches no remoto.

7. [Fluxo de time: branch, Pull Request, code review](git-na-pratica/07-fluxo-de-time.html) — por que ninguém commita na `main`, nomes de branch, Conventional Commits, abrir e descrever um PR, revisar o PR de outra pessoa, CI travando o merge, merge commit vs squash vs rebase, branch protection, e os modelos GitHub Flow, GitFlow e trunk-based.

As demais aulas são criadas uma a uma, seguindo o roteiro do README da trilha.

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
├── node-express/
│   ├── 01-node-express.html
│   ├── 02-projeto-academia.html
│   ├── 03-schema-do-banco.html
│   ├── 04-primeiro-endpoint-funcional.html
│   ├── 05-crud-instrutor-aula.html
│   ├── 06-matricula-e-regras.html
│   ├── 07-autenticacao-jwt.html
│   ├── 08-refresh-token.html
│   ├── 09-seguranca-de-borda.html
│   ├── 10-papeis-e-autorizacao.html
│   ├── 11-cookie-httponly.html
│   ├── 12-validacao-e-erros.html
│   ├── 13-transacoes-e-concorrencia.html
│   ├── 14-migrations.html
│   ├── 15-soft-delete-e-limpeza.html
│   ├── 16-testes-automatizados.html
│   ├── 17-integracao-continua.html
│   ├── 18-paginacao-filtro-ordenacao.html
│   ├── 19-documentacao-openapi.html
│   ├── 20-logs-e-health-check.html
│   ├── 21-empacotando-com-docker.html
│   └── 22-deploy-com-https.html
└── git-na-pratica/
    ├── README.md
    ├── 01-o-que-e-git.html
    ├── 02-primeiro-repositorio.html
    ├── 03-historico-e-desfazendo.html
    ├── 04-branches.html
    ├── 05-conflitos-de-merge.html
    ├── 06-repositorio-remoto.html
    └── 07-fluxo-de-time.html
```

Novas trilhas de estudo entram como novos diretórios na raiz, seguindo o mesmo padrão: arquivos HTML numerados em ordem de leitura.

## Sobre este material

Escrito com apoio de IA (Claude Code) a partir de perguntas e revisão ativa — não é conteúdo gerado e publicado sem curadoria. `CLAUDE.md` documenta as convenções seguidas (formato HTML, tom didático, estrutura de navegação) pra manter consistência entre os materiais.
