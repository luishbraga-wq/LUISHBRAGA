# Análise da Instalação Atual

Workspace: `/data/.openclaw/workspace`

## Arquivos raiz

- USER.md: presente, 537 bytes, modificado 2026-07-02T20:28:22.912506Z
- IDENTITY.md: presente, 727 bytes, modificado 2026-07-02T20:28:22.908506Z
- SOUL.md: presente, 1773 bytes, modificado 2026-07-02T20:28:22.908506Z
- AGENTS.md: presente, 7971 bytes, modificado 2026-07-02T20:28:22.908506Z
- MEMORY.md: presente, 9429 bytes, modificado 2026-07-03T01:24:40.027742Z
- MAPA.md: ausente
- HEARTBEAT.md: presente, 273 bytes, modificado 2026-07-02T20:28:22.908506Z
- TOOLS.md: presente, 961 bytes, modificado 2026-07-02T20:28:22.912506Z
- CLAUDE.md: ausente
- BOOT.md: presente, 291 bytes, modificado 2026-07-02T20:28:22.908506Z
- 0-LEIA-PRIMEIRO-AGENTE.md: presente, 26596 bytes, modificado 2026-07-03T01:19:20.409884Z
- README.md: presente, 7977 bytes, modificado 2026-07-03T01:19:20.413884Z
- manifesto.md: presente, 2934 bytes, modificado 2026-07-03T01:19:20.413884Z
- FAQ.md: presente, 13086 bytes, modificado 2026-07-03T01:19:20.413884Z
- CHANGELOG.md: presente, 121596 bytes, modificado 2026-07-03T01:19:20.413884Z
- analise-kit-v2.md: presente, 14764 bytes, modificado 2026-07-03T01:29:18.605813Z

## Diretórios relevantes

- skills: presente (85 itens)
- memory: presente (1 itens)
- templates: presente (10 itens)
- exemplos: presente (7 itens)
- _curso: presente (25 itens)
- archive: ausente
- content: ausente

## Skills instaladas

- wizard-whatsapp: categoria=canais, status=ATIVO, versão=1.0, modificado=2026-07-03T01:19:20.409884Z
- backup-workspace-github: categoria=operacional, status=ATIVO, versão=1.2, modificado=2026-07-03T01:19:20.401884Z
- commit-diario-workspace: categoria=operacional, status=RASCUNHO, versão=0.1, modificado=2026-07-03T01:19:20.401884Z
- cron-resume-wizards: categoria=operacional, status=ATIVO, versão=1.3, modificado=2026-07-03T01:19:20.401884Z
- seguranca-checklist: categoria=operacional, status=RASCUNHO, versão=0.1, modificado=2026-07-03T01:19:20.401884Z
- brainstorming: categoria=planejamento, status=ATIVO, versão=1.0, modificado=2026-07-03T01:19:20.405885Z
- executing-plans: categoria=planejamento, status=ATIVO, versão=1.0, modificado=2026-07-03T01:19:20.405885Z
- verification-before-completion: categoria=planejamento, status=ATIVO, versão=1.0, modificado=2026-07-03T01:19:20.405885Z
- writing-plans: categoria=planejamento, status=ATIVO, versão=1.0, modificado=2026-07-03T01:19:20.405885Z
- continuar-jornada: categoria=starter, status=ATIVO, versão=1.3, modificado=2026-07-03T01:19:20.393884Z
- gera-log-jornada: categoria=starter, status=ATIVO, versão=1.1, modificado=2026-07-03T01:19:20.393884Z
- onboarding-checklist: categoria=starter, status=ATIVO, versão=2.1.3, modificado=2026-07-03T01:19:20.393884Z
- primeira-vitoria: categoria=starter, status=ATIVO, versão=2.2, modificado=2026-07-03T01:19:20.393884Z
- wizard-agente: categoria=starter, status=ATIVO, versão=1.3, modificado=2026-07-03T01:19:20.393884Z
- wizard-aluno: categoria=starter, status=ATIVO, versão=1.1, modificado=2026-07-03T01:19:20.393884Z
- wizard-autonomia: categoria=starter, status=ATIVO, versão=1.7, modificado=2026-07-03T01:19:20.393884Z
- wizard-conectar: categoria=starter, status=ATIVO, versão=2.1, modificado=2026-07-03T01:19:20.393884Z
- wizard-whisper-quick: categoria=starter, status=ATIVO, versão=1.12, modificado=2026-07-03T01:19:20.397884Z
- wizard-workspace: categoria=starter, status=ATIVO, versão=1.1, modificado=2026-07-03T01:19:20.397884Z

Total de skills: 19

## Chaves de ambiente detectadas (nomes apenas, valores omitidos)

- OPENAI_API_KEY (process-env)

## Exec policy

```text
Exec Policy
┌────────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Field          │ Value                                                                                               │
├────────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Config         │ ~/.openclaw/openclaw.json                                                                           │
│ Approvals      │ ~/.openclaw/exec-approvals.json                                                                     │
│ Approvals File │ present                                                                                             │
└────────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────────┘

Effective Policy
┌────────────┬────────────────────────┬───────────────────────────────────────────────────────┬────────────────────────┐
│ Scope      │ Requested              │ Host                                                  │ Effective              │
├────────────┼────────────────────────┼───────────────────────────────────────────────────────┼────────────────────────┤
│ tools.exec │ host=gateway (tools.   │ security=full (~/.openclaw/exec-approvals.json        │ security=full\nask=off │
│            │ exec.                  │ defaults.security)\nask=off (~/.openclaw/exec-        │                        │
│            │ host)\nsecurity=full   │ approvals.json defaults.ask)\naskFallback=full (~/.   │                        │
│            │ (tools.exec.           │ openclaw/exec-approvals.json defaults.askFallback)    │                        │
│            │ security)\nask=off     │                                                       │                        │
│            │ (tools.exec.ask)       │                                                       │                        │
└────────────┴────────────────────────┴───────────────────────────────────────────────────────┴────────────────────────┘

Effective exec policy is the host approvals file intersected with requested tools.exec policy.
```

## Crons ativos

```text
No cron jobs.
```

## Customizações detectáveis / cuidado

- `MEMORY.md` já contém instruções acumuladas do OpenClaw CLI e Starter Kit; não deve ser sobrescrito.
- `SOUL.md`, `AGENTS.md`, `USER.md`, `IDENTITY.md` existem e pertencem à instalação atual; não devem ser substituídos pelos templates do kit sem aprovação.
- As 19 skills do kit já foram copiadas; próximas ações devem ser ativação/configuração, não reinstalação cega.
- Arquivos de análise gerados nesta migração são novos e seguros: `analise-kit-v2.md`, `analise-instalacao-atual.md`.