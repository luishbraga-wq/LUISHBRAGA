# PRD de Adaptação Personalizado — Starter Kit OpenClaw v2.5.7

## 1. Resumo executivo

O Starter Kit v2.5.7 já foi sincronizado com segurança: 19 skills instaladas, arquivos de leitura copiados e backup global criado antes da análise. O upgrade recomendado não é “rodar tudo por cima”; é preservar o workspace atual e ativar seletivamente recursos úteis. Nada em `SOUL.md`, `AGENTS.md`, `USER.md`, `IDENTITY.md` ou `MEMORY.md` deve ser sobrescrito por template.

## 2. O que vai mudar

- Manter as 19 skills do kit disponíveis em `skills/`.
- Usar `onboarding-checklist` e wizards como guardrails quando você quiser revisar/configurar blocos.
- Opcionalmente ativar backup GitHub, lembretes de jornada, segurança e WhatsApp — cada um com aprovação separada.
- Usar `_curso/` como fonte de verdade para dúvidas sobre aulas do mini-curso.

## 3. O que NÃO vai mudar

- Não vou substituir sua persona (`SOUL.md`).
- Não vou preencher identidade/agente/aluno sem wizard ou pedido explícito.
- Não vou criar cron, conectar GitHub, configurar WhatsApp ou reiniciar gateway sem aprovação pontual.
- Não vou deletar arquivos do kit; arquivamento só no fim e com confirmação.

## 4. Itens a adicionar / ativar

### Item A — Confirmar instalação base do kit

- Status: já feito.
- Evidência: `analise-kit-v2.md`, `analise-instalacao-atual.md`, `analise-comparativa.md`.
- Risco: baixo.
- Próxima ação: nenhuma, só manter.

### Item B — Ativar backup workspace GitHub

- Skill: `skills/operacional/backup-workspace-github`.
- Prioridade: alta.
- Valor: garante cópia privada do workspace e reduz risco antes de mudanças futuras.
- Risco: médio, porque envolve GitHub/PAT/repo e possível cron.
- Execução: somente após você aprovar “ativar backup”.
- Parada obrigatória: antes de qualquer push/criação de repo.

### Item C — Rodar wizard em modo review, se você quiser auditar tudo

- Skill mestre: `skills/starter/onboarding-checklist`.
- Prioridade: média.
- Valor: revisa passo a passo o que já existe e sugere melhorias sem recriar do zero.
- Risco: baixo/médio, depende dos passos que você aceitar.
- Execução: somente após você aprovar “rodar review”.

### Item D — Ativar segurança checklist

- Skill: `skills/operacional/seguranca-checklist`.
- Prioridade: média.
- Valor: auditoria rápida de segurança e higiene operacional.
- Risco: baixo; está marcada como RASCUNHO, então tratar como diagnóstico, não automação crítica.
- Execução: após aprovação.

### Item E — Ativar WhatsApp como canal extra

- Skill: `skills/canais/wizard-whatsapp`.
- Prioridade: baixa/média.
- Valor: usar o agente também via WhatsApp.
- Risco: médio; envolve login/QR/canal externo.
- Execução: só se você quiser especificamente WhatsApp.

### Item F — Ativar lembretes/continuação de jornada

- Skill: `skills/operacional/cron-resume-wizards`.
- Prioridade: baixa/média.
- Valor: retomar jornada sem depender de lembrar manualmente.
- Risco: baixo/médio; pode ser chato se exagerar.
- Execução: só com frequência aprovada.

## 5. Itens a substituir

Nenhum item recomendado para substituição agora.

Justificativa: não há conflito detectado entre skills antigas e novas; as skills atuais vieram do kit. Arquivos raiz existentes devem ser preservados.

## 6. Itens a manter intocados

- `SOUL.md`
- `AGENTS.md`
- `USER.md`
- `IDENTITY.md`
- `TOOLS.md`
- `HEARTBEAT.md`
- `MEMORY.md` exceto flags/logs controlados do fluxo
- Configuração OpenClaw e exec-policy atual, salvo pedido explícito

## 7. Ordem segura de execução sugerida

1. Aprovar este PRD.
2. Opcional: ativar backup GitHub primeiro.
3. Opcional: rodar `seguranca-checklist` para diagnóstico.
4. Opcional: rodar `onboarding-checklist` em modo review.
5. Opcional: configurar WhatsApp.
6. Opcional: configurar cron de retomada.
7. No final, decidir se arquiva manuais/FAQ/exemplos para `archive/`.

## 8. Pontos de parada obrigatórios

Vou parar e pedir confirmação antes de:

- Criar/alterar repo GitHub.
- Fazer primeiro push.
- Criar cron recorrente.
- Configurar WhatsApp/QR/login.
- Reiniciar gateway.
- Editar arquivos raiz de identidade/persona/perfil.
- Arquivar ou mover documentos do kit.

## 9. Estimativa de tempo

- Backup + análises: concluído.
- Ativar backup GitHub: 5–15 min, dependendo de GitHub/PAT.
- Segurança checklist: 3–8 min.
- Wizard review completo: 20–40 min.
- WhatsApp: 5–15 min.
- Cron de retomada: 3–7 min.

## 10. Recomendação

Minha recomendação: aprovar um upgrade mínimo em 2 passos agora:

1. Ativar/verificar backup GitHub.
2. Rodar segurança checklist.

Depois disso, você decide se quer fazer o wizard review completo. Isso maximiza segurança e evita transformar a instalação do kit numa reforma maior do que precisa.

## 11. Aprovação necessária

Nada operacional será executado até você aprovar. Responda com uma destas opções:

- `aprovo mínimo` — faço backup GitHub + segurança checklist, com paradas obrigatórias.
- `aprovo review` — rodo o wizard em modo review.
- `aprovo tudo do PRD` — sigo a ordem segura, parando nos pontos obrigatórios.
- `ajustar PRD` — você me diz o que mudar antes de executar.
- `parar aqui` — deixo o kit instalado como referência, sem novas ações.
