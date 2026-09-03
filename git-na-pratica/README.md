# Git na prática

Trilha de estudo sobre **Git**, do zero até o nível que o mercado de trabalho cobra no dia a dia: criar repositório, versionar, trabalhar em branch, abrir Pull Request, resolver conflito, manter histórico limpo e recuperar o que parecia perdido.

O objetivo **não** é virar especialista em Git. É conseguir entrar num time, entender o fluxo que já existe lá e contribuir sem quebrar nada — nem travar quando algo dá errado.

## Como esta trilha funciona

- **10 aulas, lista fechada.** Definida antes de escrever a primeira linha, justamente pra ter um fim visível. Nada de "mais um tópico" no meio do caminho.
- **Um projeto prático só**, construído do zero e usado em todas as aulas: um site estático simples chamado `guia-de-cafes` (`index.html` + `README.md`). O conteúdo é trivial de propósito — aqui se estuda Git, não HTML. Conflito de merge se provoca numa linha de texto, sem debugar código.
- **O projeto vive fora deste repositório**, em algo como `~/projetos/guia-de-cafes`. Criar um repositório Git dentro de outro repositório Git (este aqui) confunde `git status` e `git log`, e os comandos das aulas passam a mostrar coisa errada.
- **Plataforma remota: GitHub.** É o que mais aparece em vaga. Onde o nome muda no GitLab (Merge Request em vez de Pull Request), a aula sinaliza.
- Cada aula é um arquivo HTML, na ordem numérica. Abra direto no navegador com o repositório clonado.

## As 10 aulas

| # | Aula | O que cobre |
|---|------|-------------|
| 01 | [O que é Git e por que ele existe](01-o-que-e-git.html) | O problema que o controle de versão resolve, contexto histórico (Linux kernel, BitKeeper, Torvalds em 2005), centralizado vs distribuído, Git ≠ GitHub, o modelo de snapshots, instalação e `git config` inicial |
| 02 | [Primeiro repositório: o ciclo básico](02-primeiro-repositorio.html) | Criar o projeto, `git init`, os três estados (working directory, staging, repositório) e por que o staging existe, `status`, `add`, `commit`, `log`, `.gitignore` — incluindo por que ele não funciona em arquivo já rastreado (`git rm --cached`) |
| 03 | [Navegando o histórico e desfazendo](03-historico-e-desfazendo.html) | `log` com filtros, `show`, `diff` nas três comparações possíveis, `restore`, `restore --staged`, `commit --amend`, `reset --soft/--mixed/--hard`, `revert`. Tabela "quero desfazer X, use Y" |
| 04 | [Branches: trabalhar em paralelo](04-branches.html) | Branch é um ponteiro, o que é `HEAD`, `switch -c`, `branch`, merge fast-forward vs merge commit, deletar branch |
| 05 | [Conflitos de merge](05-conflitos-de-merge.html) | Provocar um conflito de verdade, ler os marcadores `<<<<<<<`, resolver, `merge --abort`, e o que reduz a frequência de conflito num time |
| 06 | [Repositório remoto: GitHub](06-repositorio-remoto.html) | Criar o repositório remoto, SSH vs HTTPS com token, `remote add`, `push -u`, `clone`, `fetch` vs `pull`, `pull --rebase`, push rejeitado (non-fast-forward), branch de rastreamento |
| 07 | [Fluxo de time: branch, Pull Request, code review](07-fluxo-de-time.html) | Por que ninguém commita na `main`, feature branch, abrir PR, revisar o PR de outra pessoa, merge commit vs squash vs rebase-merge, branch protection, CI vermelho travando o merge, nomes de branch e Conventional Commits, e os modelos de fluxo com nome (GitHub Flow, GitFlow, trunk-based) |
| 08 | Rebase e histórico limpo | Rebase vs merge, `rebase -i` (squash, reword, drop, fixup), conflito **durante** rebase (`--continue`, `--abort`, `--skip`), a regra de ouro de não reescrever histórico compartilhado, `--force-with-lease` |
| 09 | Rede de segurança: stash, reflog, cherry-pick | `stash` pra trocar de contexto no meio do trabalho, `reflog`, recuperar branch deletada e `reset --hard` errado, `cherry-pick`, e o caso do segredo commitado (por que remover do histórico não basta: a credencial precisa ser rotacionada) |
| 10 | Git no dia a dia do trabalho | Cenários reais de ponta a ponta: hotfix, atualizar branch antiga, revisar PR de colega localmente, `blame`, `bisect` (breve), tags e release (breve), `.gitignore` global, aliases, e colinha final de comandos |

A ordem tem dependência real: a aula 05 depende da 04, a 07 depende da 06, a 08 depende da 07.

## O que fica de fora

Declarado aqui pra trilha ter um fim claro. São assuntos de especialista, ou ferramenta em volta do Git em vez do Git em si:

- Submodules e worktrees
- Hooks e `husky` / `lint-staged`
- Estratégias de monorepo, sparse checkout, Git LFS
- `filter-repo` e reescrita em massa de histórico
- Recuperação de repositório corrompido
- O funcionamento interno (plumbing): objetos, packfiles, formato do `.git`

## Pré-requisitos

Nenhum conhecimento de Git. É preciso saber usar o terminal no básico (`cd`, `ls`, `mkdir`) e ter uma conta no GitHub a partir da aula 06 — a criação da conta é coberta lá.
