# MAPA — memory/

> O que vive nesta pasta: tudo que o agente precisa lembrar entre sessões — decisões, projetos e contexto.

## Estrutura

```text
memory/
├── MAPA.md
├── decisoes/  ← decisões importantes, 1 arquivo por mês
└── projects/  ← projetos ativos, 1 arquivo por projeto
```

## Convenção de nomes

- `decisoes/{YYYY-MM}.md` — append-only, decisões cronológicas.
- `projects/{nome-curto}.md` — status e contexto de projeto ativo.

Cada pasta documenta a si mesma. Evitar TOOLS.md monolítico.
