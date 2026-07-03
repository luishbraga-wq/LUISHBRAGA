# Análise do Kit OpenClaw v2.5.7

Gerado automaticamente a partir das skills e arquivos copiados para o workspace.

## Arquivos de leitura presentes

- 0-LEIA-PRIMEIRO-AGENTE.md: presente
- README.md: presente
- manifesto.md: presente
- FAQ.md: presente
- CHANGELOG.md: presente

## Registries

- skills/canais/_registry.md
- skills/operacional/_registry.md
- skills/planejamento/_registry.md
- skills/starter/_registry.md

## Templates / exemplos / curso

- templates: presente
- exemplos: presente
- _curso: presente

## Inventário de skills

### wizard-whatsapp
- Caminho: `skills/canais/wizard-whatsapp/SKILL.md`
- Status: ATIVO
- Versão: 1.0
- Categoria: canais
- Propósito: Use when student types "ativa whatsapp" / "configura whatsapp" / "quero usar whatsapp", typically AFTER finishing primeira-vitoria (next-step optional). Configures WhatsApp as additional channel beyond Telegram, with 2 modes (sessão própria...
- Dependências externas/instrumentais detectadas: Telegram, WhatsApp, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `wizard-whatsapp`.
- Risco de adoção: MÉDIO

### backup-workspace-github
- Caminho: `skills/operacional/backup-workspace-github/SKILL.md`
- Status: ATIVO
- Versão: 1.2
- Categoria: operacional
- Propósito: Use when student wants automatic daily backup of workspace to private GitHub repo. Activates during item "Integrações" of the wizard checklist OR standalone when student types "ativa backup github" / "configura backup". Combines openclaw ba...
- Dependências externas/instrumentais detectadas: GITHUB, Telegram, cron, curl, git, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `backup-workspace-github`.
- Risco de adoção: MÉDIO

### commit-diario-workspace
- Caminho: `skills/operacional/commit-diario-workspace/SKILL.md`
- Status: RASCUNHO
- Versão: 0.1
- Categoria: operacional
- Propósito: Commit + push diário do workspace pro GitHub (gancho A2 backup-workspace-github + A9 cron + A12 GitHub via PAT). Roda toda noite 23h59 BRT, faz git add . / commit / push se houver mudança real. Skip silencioso se git status limpo. Notifica ...
- Dependências externas/instrumentais detectadas: GITHUB, Telegram, cron, gh , git, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `commit-diario-workspace`.
- Risco de adoção: MÉDIO

### cron-resume-wizards
- Caminho: `skills/operacional/cron-resume-wizards/SKILL.md`
- Status: ATIVO
- Versão: 1.3
- Categoria: operacional
- Propósito: Cron-DM ATIVO. **v1.3 (kit v2.5.6 — humanização do tom + redução de frequência baseada em feedback Bruno): (1) Cron volta de 2x/dia (09h+19h) pra **1x/dia (09h BRT)** — feedback de aluno sentindo cobrança 2x ao dia + 3 tentativas era invasi...
- Dependências externas/instrumentais detectadas: GITHUB, Telegram, cron, curl, git, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `cron-resume-wizards`.
- Risco de adoção: MÉDIO

### seguranca-checklist
- Caminho: `skills/operacional/seguranca-checklist/SKILL.md`
- Status: RASCUNHO
- Versão: 0.1
- Categoria: operacional
- Propósito: Use when student types "audit segurança" / "checklist segurança" / "como tá minha segurança" / "scan agente", OR when dispatched monthly via cron (gancho A9). Roda 5 verificações de saúde de segurança no agente do aluno e gera report ranque...
- Dependências externas/instrumentais detectadas: GITHUB, Hostinger, OPENAI_API_KEY, Telegram, cron, git, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `seguranca-checklist`.
- Risco de adoção: MÉDIO

### brainstorming
- Caminho: `skills/planejamento/brainstorming/SKILL.md`
- Status: ATIVO
- Versão: 1.0
- Categoria: planejamento
- Propósito: Use BEFORE any creative or design work — features novas, mudanças de comportamento do agente, decisões de arquitetura. Explores user intent, requirements, and design BEFORE implementation. Adapted from obra/superpowers (originally for softw...
- Dependências externas/instrumentais detectadas: GITHUB, git
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `brainstorming`.
- Risco de adoção: MÉDIO

### executing-plans
- Caminho: `skills/planejamento/executing-plans/SKILL.md`
- Status: ATIVO
- Versão: 1.0
- Categoria: planejamento
- Propósito: Use to execute a plan written by writing-plans skill. Walks through tasks one by one, marks progress in real-time, surfaces blockers, asks for review at checkpoints. Adapted from obra/superpowers (executing-plans skill). Loops independently...
- Dependências externas/instrumentais detectadas: GITHUB, gh , git
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `executing-plans`.
- Risco de adoção: MÉDIO

### verification-before-completion
- Caminho: `skills/planejamento/verification-before-completion/SKILL.md`
- Status: ATIVO
- Versão: 1.0
- Categoria: planejamento
- Propósito: Use BEFORE declaring task/project complete. Forces evidence-based verification — runs tests, checks output, confirms each success criterion before marking done. Adapted from obra/superpowers (verification-before-completion skill). Eliminate...
- Dependências externas/instrumentais detectadas: GITHUB, curl, git
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `verification-before-completion`.
- Risco de adoção: MÉDIO

### writing-plans
- Caminho: `skills/planejamento/writing-plans/SKILL.md`
- Status: ATIVO
- Versão: 1.0
- Categoria: planejamento
- Propósito: Use AFTER brainstorming, BEFORE coding/building. Transforms a brainstorm output into an executable plan with concrete tasks, dependencies, and verification criteria. Adapted from obra/superpowers (writing-plans skill). Plans are documents, ...
- Dependências externas/instrumentais detectadas: GITHUB, curl, git
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `writing-plans`.
- Risco de adoção: MÉDIO

### continuar-jornada
- Caminho: `skills/starter/continuar-jornada/SKILL.md`
- Status: ATIVO
- Versão: 1.3
- Categoria: starter
- Propósito: Use when student types "continuar" / "continuar mini-curso" / "próximo passo" / "aula X feita" AFTER `onboarding_complete: true`. Master skill que orquestra progressão pelas 31 aulas da Hotmart (6 módulos). Lê MEMORY.md, detecta progresso a...
- Dependências externas/instrumentais detectadas: Telegram, cron, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `continuar-jornada`.
- Risco de adoção: MÉDIO

### gera-log-jornada
- Caminho: `skills/starter/gera-log-jornada/SKILL.md`
- Status: ATIVO
- Versão: 1.1
- Categoria: starter
- Propósito: Use when student types "gera log" / "gera feedback" / "histórico jornada" / "relatório" — generates a structured log of the student's journey through the kit (which steps completed, which were skipped/postponed, observations captured inline...
- Dependências externas/instrumentais detectadas: Chromium, GITHUB, Telegram, gh , git, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `gera-log-jornada`.
- Risco de adoção: MÉDIO

### onboarding-checklist
- Caminho: `skills/starter/onboarding-checklist/SKILL.md`
- Status: ATIVO
- Versão: 2.1.3
- Categoria: starter
- Propósito: Use when student opens Telegram for the first time after installing the Starter Kit, OR when student types "continuar" / "retomar" / "reativa jornada" / "checklist". Master skill that orchestrates the full onboarding journey by dispatching ...
- Dependências externas/instrumentais detectadas: Chromium, GITHUB, Hostinger, OPENAI_API_KEY, Telegram, WhatsApp, cron, git, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `onboarding-checklist`.
- Risco de adoção: ALTO

### primeira-vitoria
- Caminho: `skills/starter/primeira-vitoria/SKILL.md`
- Status: ATIVO
- Versão: 2.2
- Categoria: starter
- Propósito: Use when student types "primeira vitória" / "vamo gerar algo", OR when dispatched by onboarding-checklist as passo 6 (último). Generates first real artifact (post, email, decisão registrada) using IDENTITY + USER + Brave Search. Saves to co...
- Dependências externas/instrumentais detectadas: Chromium, GITHUB, Hostinger, Telegram, WhatsApp, curl, git, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `primeira-vitoria`.
- Risco de adoção: MÉDIO

### wizard-agente
- Caminho: `skills/starter/wizard-agente/SKILL.md`
- Status: ATIVO
- Versão: 1.3
- Categoria: starter
- Propósito: Use when student types "configura agente" / "cria identidade do agente", OR when dispatched by onboarding-checklist as passo 1. Creates IDENTITY.md (nome, gênero, modelo, agent_id) + SOUL.md stub (tom geral, 1 anti-pattern) + AGENTS.md (boo...
- Dependências externas/instrumentais detectadas: Telegram, git, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `wizard-agente`.
- Risco de adoção: ALTO

### wizard-aluno
- Caminho: `skills/starter/wizard-aluno/SKILL.md`
- Status: ATIVO
- Versão: 1.1
- Categoria: starter
- Propósito: Use when student types "configura usuário" / "cria meu perfil" / "USER.md", OR when dispatched by onboarding-checklist as passo 2. Creates USER.md with student's basic info (nome, timezone, o que faz, tom preferido). Detects existing USER.m...
- Dependências externas/instrumentais detectadas: Telegram, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `wizard-aluno`.
- Risco de adoção: ALTO

### wizard-autonomia
- Caminho: `skills/starter/wizard-autonomia/SKILL.md`
- Status: ATIVO
- Versão: 1.7
- Categoria: starter
- Propósito: Use when student types "libera autonomia" / "ativa yolo" / "configura exec-policy", OR when dispatched by onboarding-checklist as passo 3. Guides student to manually run `openclaw exec-policy preset yolo` in the appropriate terminal (Princí...
- Dependências externas/instrumentais detectadas: GITHUB, Hostinger, Telegram, git, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `wizard-autonomia`.
- Risco de adoção: MÉDIO

### wizard-conectar
- Caminho: `skills/starter/wizard-conectar/SKILL.md`
- Status: ATIVO
- Versão: 2.1
- Categoria: starter
- Propósito: Use when student types "conecta superpoderes" / "configura integrações" / "ativa tavily/brave/github", OR when dispatched by onboarding-checklist as passo 5. Configures Tavily Search API key (default desde kit v2.5.5 — designed pra agente I...
- Dependências externas/instrumentais detectadas: Chromium, GH_TOKEN, GITHUB, Hostinger, OPENAI_API_KEY, Telegram, browser, cron, curl, git, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `wizard-conectar`.
- Risco de adoção: ALTO

### wizard-whisper-quick
- Caminho: `skills/starter/wizard-whisper-quick/SKILL.md`
- Status: ATIVO
- Versão: 1.12
- Categoria: starter
- Propósito: Use when student types "configura whisper" / "ativa áudio" / "quero mandar áudio", OR when dispatched by onboarding-checklist as passo 0 (pré-passo opcional). Configures OpenAI API key in .env so student can send voice messages on Telegram ...
- Dependências externas/instrumentais detectadas: Hostinger, OPENAI_API_KEY, Telegram, cron, curl, git, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `wizard-whisper-quick`.
- Risco de adoção: ALTO

### wizard-workspace
- Caminho: `skills/starter/wizard-workspace/SKILL.md`
- Status: ATIVO
- Versão: 1.1
- Categoria: starter
- Propósito: Use when student types "organiza workspace" / "cria mapa", OR when dispatched by onboarding-checklist as passo 4. Creates minimal workspace structure (content/, memory/, skills/, archive/) + MAPA.md raiz + 4 local MAPAs (Princípio 12 — mapa...
- Dependências externas/instrumentais detectadas: GITHUB, Telegram, cron, git, openclaw
- Dependências internas: verificar referências no fluxo; muitas starter skills dependem da `onboarding-checklist` e princípios defensivos.
- Valor agregado: adiciona fluxo guiado/operacional para `wizard-workspace`.
- Risco de adoção: ALTO

## Observações rápidas

- O kit trouxe 19 skills funcionais organizadas em starter, operacional, planejamento e canais.
- O caminho seguro em workspace populado é gerar PRD antes de executar mudanças adicionais.