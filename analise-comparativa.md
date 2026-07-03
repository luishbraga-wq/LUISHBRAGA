# Análise Comparativa — Starter Kit v2.5.7 vs Workspace Atual

## Contexto

- Workspace atual: `/data/.openclaw/workspace`
- Backup pré-upgrade criado: `/data/backups/pre-upgrade-v2-2026-07-03-0128.tar.gz` (1.2M)
- Kit sincronizado: 19 skills em `skills/{starter,operacional,planejamento,canais}`
- Arquivos de leitura copiados: `0-LEIA-PRIMEIRO-AGENTE.md`, `README.md`, `manifesto.md`, `FAQ.md`, `CHANGELOG.md`
- Materiais auxiliares presentes: `templates/`, `exemplos/`, `_curso/`

## BUCKET A — Skills do kit que NÃO temos

Situação após migração obrigatória: **nenhuma skill funcional do kit está ausente**. As 19 skills foram copiadas com sucesso.

Observação importante: “ter a skill instalada” não significa que os recursos foram configurados/ativados. As candidatas reais agora são ativações guiadas, não cópia de arquivos:

| Item | Prioridade | Risco | Esforço | Recomendação |
|---|---:|---:|---:|---|
| `backup-workspace-github` | ALTA | MÉDIO | M | Ativar depois de confirmar GitHub/PAT/repo. Tem valor operacional forte. |
| `cron-resume-wizards` | MÉDIA | BAIXO/MÉDIO | S | Só ativar se o usuário quiser lembretes; pode ser invasivo se mal calibrado. |
| `wizard-whatsapp` | BAIXA/MÉDIA | MÉDIO | M | Ativar apenas se houver intenção real de usar WhatsApp como canal extra. |
| `seguranca-checklist` | MÉDIA | BAIXO | S | Bom como auditoria manual/recorrente, mas está RASCUNHO. |
| `commit-diario-workspace` | BAIXA/MÉDIA | MÉDIO | M | Está RASCUNHO; só ativar após backup GitHub consolidado. |

## BUCKET B — Skills do kit que JÁ TEMOS em versão diferente

Não havia skill custom pré-existente detectável no workspace antes da migração; as skills atuais vieram do kit recém-sincronizado. Portanto não há conflito de versão entre “nossa skill antiga” e “skill do kit”.

Cuidados:

- Se no futuro aparecerem skills custom com nomes iguais, comparar conteúdo antes de sobrescrever.
- Não substituir root files (`SOUL.md`, `AGENTS.md`, `USER.md`, `IDENTITY.md`) por templates do kit.
- `MEMORY.md` foi preservado e apenas recebeu flags/logs do fluxo.

## BUCKET C — Padrões/estruturas do kit que poderíamos adotar

| Padrão | Valor | Esforço | Recomendação |
|---|---|---:|---|
| Guardrails P11/P13/P14/P15/P16/P18 | Reduz improviso, validação falsa e fuga de wizard | S | Já incorporado como instrução operacional. Manter. |
| Estrutura `skills/{starter,operacional,planejamento,canais}` | Organização clara por tipo de habilidade | XS | Já adotada. |
| `templates/` e `exemplos/` como referência | Ajuda a evoluir arquivos raiz sem sobrescrever | S | Usar só como consulta, com aprovação antes de aplicar. |
| `_curso/` como fonte de verdade para Hotmart | Evita respostas inventadas sobre aulas | S | Adotar como regra pós-Bloco A. |
| Arquivamento pós-jornada | Remove ruído do workspace ativo sem deletar | S/M | Fazer somente no fim da jornada, com confirmação. |
| Checklist/wizard state em `MEMORY.md` | Permite pausar/retomar sem perder contexto | S | Usar quando um wizard estiver ativo. |

## BUCKET D — Customizações nossas que NÃO devem ser tocadas

| Item | Por que importa | Como proteger |
|---|---|---|
| `SOUL.md` | Define persona/tom atual do agente | Não substituir por template. Só editar se usuário pedir explicitamente. |
| `AGENTS.md` | Regras locais de operação, memória e segurança | Não sobrescrever. Se precisar evoluir, usar patch cirúrgico. |
| `USER.md` | Perfil do usuário; hoje está template, mas ainda é arquivo do workspace | Não preencher sem wizard/consentimento. |
| `IDENTITY.md` | Identidade do agente; hoje template | Só preencher via `wizard-agente` ou pedido explícito. |
| `MEMORY.md` | Contém histórico e instruções acumuladas desta instalação | Nunca substituir. Apenas append/edits controlados. |
| Exec policy yolo | Já configurado pelo usuário | Não alterar. Apenas verificar quando necessário. |
| Telegram como canal atual | Kit foi otimizado para Telegram e estamos nele | Manter fluxo por Telegram. |

## Conclusão comparativa

O kit já foi instalado no sentido de “arquivos e skills disponíveis”. O upgrade real deve ser **curadoria e ativação**, não reinstalação. O caminho seguro é:

1. Preservar arquivos raiz e memória.
2. Manter as 19 skills instaladas.
3. Criar um PRD mínimo focado em ativar/configurar apenas o que traz valor imediato.
4. Parar antes de qualquer mudança operacional externa (GitHub, cron, WhatsApp, gateway restart).
5. Executar item a item somente após aprovação explícita.
