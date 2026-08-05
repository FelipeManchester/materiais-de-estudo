# Estudo

Repositório pessoal de material de estudo sobre desenvolvimento de software, em **português (pt-BR)**.

Cada trilha cobre um tema técnico em profundidade, do conceito teórico até a prática — pensado tanto pra estudo guiado (lendo do início ao fim) quanto pra consulta futura (voltar num tópico específico quando precisar).

## Como usar

Todo material é escrito em **HTML autocontido** — sem build, sem dependência externa, sem servidor. Basta abrir o arquivo `.html` direto no navegador (duplo clique ou `Ctrl+O` / `Cmd+O` no navegador).

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

Próximos materiais planejados (ver seção "O que vem a seguir" no fim do último arquivo da trilha): primeira API funcional, autenticação e autorização, boas práticas de produção.

## Estrutura do repositório

```
estudo/
├── README.md
├── CLAUDE.md          # guia de convenções pra quem (ou o que) for gerar novo material aqui
└── api-rest/
    ├── 01-fundamentos-rest.html
    ├── 02-http-na-pratica.html
    ├── 03-design-de-recursos-e-uris.html
    └── 04-escolha-de-stack.html
```

Novas trilhas de estudo entram como novos diretórios na raiz, seguindo o mesmo padrão: arquivos HTML numerados em ordem de leitura.

## Sobre este material

Escrito com apoio de IA (Claude Code) a partir de perguntas e revisão ativa — não é conteúdo gerado e publicado sem curadoria. `CLAUDE.md` documenta as convenções seguidas (formato HTML, tom didático, estrutura de navegação) pra manter consistência entre os materiais.
