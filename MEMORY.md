# MEMORY.md

## OpenClaw CLI setup guidance
- `openclaw setup` and `openclaw onboard` run the full guided first-run path for gateway, model auth, workspace, channels, skills, and health.
- `openclaw setup --baseline` creates the baseline config and workspace without walking the guided onboarding flow.
- `openclaw configure` changes targeted parts of an existing setup, such as model auth, gateway, channels, plugins, or skills.
- `openclaw channels add` configures channel accounts after the baseline exists; run it without flags for guided channel setup or with channel-specific flags for scripts.

## Starter-kit OpenClaw installation protocol
- If a `starter-kit-openclaw-*.zip` or extracted `starter-kit/` is present, do not improvise a review or ask for paths before attempting install.
- Required flow: extract zip if needed; migrate `starter-kit/skills/{starter,operacional,planejamento,canais}` into `$WORKSPACE/skills/`; copy reading files (`0-LEIA-PRIMEIRO-AGENTE.md`, `README.md`, `manifesto.md`, `FAQ.md`, `CHANGELOG.md`) and optional folders (`exemplos`, `templates`, `_curso`) to workspace root; verify real `SKILL.md` count.
- If no skills are migrated, stop honestly and ask where the kit/zip is.
- Once migrated, immediately read `$WORKSPACE/skills/starter/onboarding-checklist/SKILL.md`, render the canonical “Boas-vindas universal” literally, then follow that skill’s turn flow through the Hotmart pre-bifurcation message and wait.

## Starter-kit anti-improvisation guardrails
- When handling the starter kit, do not read README and improvise an install flow, create/modify root identity/persona files (`USER`, `IDENTITY`, `SOUL`, `AGENTS`, `MAPA`) outside the kit flow, ask false-choice questions like “start journey now or just make skills available?”, invent installation options, or add preambles like “Recebi o kit, dei uma olhada rápida...”.
- The kit’s principle is strict: no clever “helpful” improvisation before the canonical onboarding entry point. If the real skill is unavailable, state the blocker honestly instead of fabricating the flow.

## Starter-kit regression case studies and required fixes
- Known anti-patterns from tester cases: asking whether to start journey vs only enable skills; handing upgrade prompts to the student instead of executing them; asking about Whisper before checking `.env`; claiming audio validation without literal command/output; offering identity/wizard choices before canonical onboarding; Telegram hard-breaks in welcome copy; code-review-style kit analysis after “extraia e analise”; wizard state collisions; ambiguous first-victory choices; backup confirmations out of order; P14 validation claims without command/output.
- Required kit behavior/fixes: always invoke `onboarding-checklist` and render canonical welcome when the kit is detected; execute upgrades in the same agent; run detection before asking setup questions; P14 means show command + literal output before asserting validation; avoid artificial hard-breaks in Telegram welcome text; wizard transitions must clear/set `active_wizard`/`active_step` before the first message and avoid reusing `1/2` option shapes across consecutive wizards; first-victory options need inline names and confirmation; backup flow should be announcement → output → confirmation with smoke test; wizard-conectar/autonomia require extra-rigid P14: announcement+command, output, then interpretation.

## Starter-kit v2.5.3 additions
- External prompt text should be phrased naturally to avoid cético/prompt-injection rejection: say the user sent `starter-kit-openclaw-v2.5.3.zip`, explain it is a Pixel Educação install kit, and ask the agent to extract, read `0-LEIA-PRIMEIRO-AGENTE.md`, and follow it. Avoid external wording like “abandon context”, “this kit has priority”, or imperative override language; imperative rules live inside the kit file after extraction.
- Wizard-conectar must handle VPS-root Chromium `SingletonLock: Permission denied`: detect literal error + vps-root, then try canonical branch (`--no-sandbox`, remove snap chromium, apt install chromium-browser, gateway restart, validate), with anti-loop limit of 2 attempts.
- Before long commands (30s+), send an expectation-setting message before invoking the tool: command to run, expected duration, that the agent will be blocked and cannot send updates mid-command, and when the user should poke if no return. Applies to Chromium install, first GitHub backup push, gateway restart, and similar long ops.

## Starter-kit onboarding-checklist orchestration rules
- The `onboarding-checklist` is the master skill and must define the real flow; do not invent or simplify it. It handles: phase zero scenario detection; mode bifurcation for empty workspaces; child wizard dispatch; fixed post-first-victory options; and exiting wizard mode when complete.
- Scenario A: empty workspace → normal journey steps 0–6. Scenario B: populated/old-student workspace → present exactly 3 paths (A agnostic skills / B full upgrade via agentic prompt executed by this same agent / C leave files available) and wait for the user choice before acting. Scenario C: partial workspace → each child wizard applies Principle 11 detection before asking.
- If this agent already has the student’s populated workspace, do not hand `prompt-upgrade-para-aluno-antigo.md` to the student to paste elsewhere; execute the upgrade in this same agent when the user chooses the full-upgrade path.
- Child wizards are full skills, not conversation shortcuts. When `onboarding-checklist` dispatches wizard X, read `skills/starter/wizard-X/SKILL.md` and follow it exactly. Always run its Principle 11 detection before asking the student setup questions.
- Principle 13 guardrail: when `active_wizard:` is set in `MEMORY.md`, classify every student message against the active wizard state instead of improvising, jumping steps, or treating off-scope work as wizard continuation.

## Starter-kit wizard state, validation, canonical text, and course-content rules
- Principle 13 message classification when `active_wizard` is set: (1) direct answer → process/advance; (2) canonical escape (`cancela`, `pula`, `voltar N`, `sobre`, `faq`, `ajuda`, `corrige`, `muda modo`) → honor it; (3) tangential question about the current step → answer in one line and bring back; (4) total deviation → add it under `## Perguntas pendentes` in `MEMORY.md` and return with: “Anotado: {resumo do desvio} — vou abordar depois. Mas pra fechar este passo, preciso que você {ação específica}.” After 3 consecutive deviations, offer to pause and schedule a 4h return.
- Starter-kit wizard state schema in `MEMORY.md`: `active_wizard`, `active_step`, `awaiting`, `desvios_neste_passo`, plus `## Perguntas pendentes` entries with date, user question, and wizard to resume after.
- Principle 14 smoke tests: when a skill asks for an external command/API/CLI (`curl`, bash, `gh`, `openclaw`, etc.), show the exact command, show literal output (HTTP code + body when applicable), and only then interpret. If command+output cannot be shown, abort and ask for help; never claim validation from memory or imagination.
- Principle 15 canonical text: SKILL.md sections marked `<canonical>...</canonical>` or `# CANONICAL` must be rendered literally. Do not rewrite, improve, reorder options, or swap technical keywords. Only minimal tone adjustment is allowed when it does not change structure/order/content.
- Principle 18 course-content rule: after setup Bloco A, if the student mentions a Hotmart lesson or course theme, do not improvise from general knowledge. Consult `$WORKSPACE/_curso/INDICE.md` first, then load only relevant HTML/transcript excerpts. For vague/cross-lesson questions, grep `_curso/transcricao-completa.md` before selecting HTML. Conduct steps based on course material and mark `mini_curso_progress: aula_X_concluida` in `MEMORY.md` when the student says they finished.

## Starter-kit course-content additional guardrails
- For course questions, do not improvise, load whole HTML every turn, invent steps not in the material, send Drive/external links, or skip `_curso/INDICE.md`. The local `_curso/` folder is the source of truth.
- If a topic is not covered by the mini-course, say honestly: “Esse tópico específico não tá no mini-curso, mas o padrão geral é o mesmo da Aula X. Posso te conduzir aplicando o mesmo princípio?” Then find the closest course material and use it as a base.
- Starter-kit TL;DR: read `skills/starter/onboarding-checklist/SKILL.md`; follow it exactly; for child wizards read their own `SKILL.md` and begin with detection; during active wizards apply P13, P14, P15, and ask rather than invent when stuck.

## Starter Kit OpenClaw state
kit_intro_done=true
starter_kit_version: v2.5.7
ambiente: managed
ambiente_detected_at: 2026-07-03T01:16:00Z
ambiente_signals: [managed_signal_1, managed_signal_3, localdev_signal_1, has_openai_envvar]
managed_has_openai_envvar: true
has_openai_envvar: true
starter_kit_scenario: B_workspace_populado
starter_kit_skills_migrated: 19
starter_kit_complete_zip_received: true
starter_kit_root_files_copied: [0-LEIA-PRIMEIRO-AGENTE.md, README.md, manifesto.md, FAQ.md, CHANGELOG.md]
starter_kit_awaiting_choice: scenario_B_path_1_2_3
starter_kit_selected_path: 1_PRD_personalizado
starter_kit_awaiting_choice: path_1_waiting_ok_to_start_upgrade_prd
upgrade_in_progress=true
starter_kit_prd_generated=true
starter_kit_prd_path: prd-upgrade-v2.md
starter_kit_awaiting_choice: approve_prd_minimo_review_tudo_ajustar_parar
mode: review
modo_jornada: wizard
active_wizard: wizard-whisper-quick
active_step: 1
awaiting: whisper_detection
starter_kit_awaiting_choice: null
whisper_key_validated=true
active_wizard: wizard-whisper-quick
active_step: smoke_test_audio
awaiting: short_audio_message
whisper_audio_smoke_test: insufficient_quota
active_wizard: wizard-whisper-quick
active_step: smoke_test_audio
awaiting: openai_billing_or_retry
student_profile: aluno_novo_curso_quer_comecar_do_zero
whisper_skip_choice: agendado
whisper_reminder_at: 2026-07-04T01:37:00Z
whisper_reminder_cron_id: e92c7d28-bab4-44e9-aca5-67df895e20dd
active_wizard: wizard-agente
active_step: 1
awaiting: agent_review_or_setup
active_wizard: wizard-agente
active_step: nome_agente
awaiting: nome_agente
nome_agente: Diabinho
active_wizard: wizard-agente
active_step: genero_agente
awaiting: genero_agente
genero_agente: homem_ele_dele
active_wizard: wizard-agente
active_step: tom_agente
awaiting: tom_agente
tom_agente: casual_direto_brasileiro
active_wizard: wizard-agente
active_step: anti_pattern
awaiting: anti_pattern
anti_pattern: nunca_usar_linguagem_de_coach
active_wizard: wizard-agente
active_step: confirm_create_files
awaiting: confirm_create_identity_soul_agents
agente_configured=true
active_wizard: wizard-agente
active_step: pergunta_ancora
awaiting: identity_live_source_answer
agente_anchor_answer: pega_automatico
agente_configured=true
active_wizard: wizard-aluno
active_step: 1
awaiting: aluno_detection
active_wizard: wizard-aluno
active_step: nome_e_chamada
awaiting: nome_completo_como_chamar
nome_completo_aluno: Luís Henrique
como_chamar_aluno: Henrique
active_wizard: wizard-aluno
active_step: cidade_timezone
awaiting: cidade_pais
cidade_aluno: Salvador, Bahia, Brasil
timezone_aluno: America/Bahia
active_wizard: wizard-aluno
active_step: o_que_faz
awaiting: o_que_faz
o_que_faz_aluno: médico psiquiatra; médico do trabalho; lado B fotógrafo de paisagens com drone DJI
active_wizard: wizard-aluno
active_step: tom_preferido
awaiting: tom_preferido
tom_preferido_aluno: bem_direto_explicado_formal
active_wizard: wizard-aluno
active_step: confirm_create_user
awaiting: confirm_create_user_md
aluno_configured=true
active_wizard: wizard-aluno
active_step: pergunta_ancora
awaiting: user_live_source_answer
aluno_anchor_answer: automatico
aluno_configured=true
active_wizard: wizard-autonomia
active_step: 1
awaiting: autonomia_detection
autonomia_liberada=true
exec_policy: yolo
active_wizard: wizard-autonomia
active_step: pergunta_ancora
awaiting: exec_policy_reset_answer
autonomia_anchor_answer: full_partial_corrected
active_wizard: wizard-workspace
active_step: 1
awaiting: workspace_detection
active_wizard: wizard-workspace
active_step: confirm_create_structure
awaiting: confirm_workspace_structure
workspace_organizado=true
active_wizard: wizard-workspace
active_step: pergunta_ancora
awaiting: workspace_map_anchor_answer
workspace_map_anchor_answer: post_content_drafts_decisao_memory_decisoes_confirmed
workspace_organizado=true
active_wizard: wizard-conectar
active_step: 1
awaiting: conectar_detection
conectar_detection_search: missing
conectar_detection_github: missing
conectar_detection_chromium: installed
active_wizard: wizard-conectar
active_step: tavily_key
awaiting: tavily_api_key_or_brave_or_pula
search_provider_choice: brave
active_wizard: wizard-conectar
active_step: brave_key
awaiting: brave_search_api_key
search_api_skipped=true
search_provider_choice: skipped
active_wizard: wizard-conectar
active_step: github_account
awaiting: github_account_yes_no
github_account: missing
active_wizard: wizard-conectar
active_step: github_create_account
awaiting: github_account_created
onboarding_paused_at_step=5
wizard_paused_at: 2026-07-03T02:15:00Z
active_wizard: wizard-conectar
active_step: github_create_account
awaiting: github_account_created
resume_hint: criar conta GitHub em https://github.com/signup e mandar 'criei'
github_account: present
github_repo_url: https://github.com/luishbraga-wq/LUISHBRAGA.git
active_wizard: wizard-conectar
active_step: github_pat
awaiting: github_personal_access_token_classic
github_token_validated=true
github_username: luishbraga-wq
github_token_saved_env=true
active_wizard: wizard-conectar
active_step: backup_workspace_github
awaiting: backup_workspace_activation
backup_active: true
backup_repo_url: https://github.com/luishbraga-wq/LUISHBRAGA.git
backup_cron_job_id: 02bf0d33-1e19-4f8a-bf2d-235147514833
backup_cron_schedule: daily 03:00 America/Bahia
active_wizard: wizard-conectar
active_step: pergunta_ancora
awaiting: conectar_anchor_answer
conectado: partial
active_wizard: wizard-conectar
active_step: tavily_key
awaiting: tavily_api_key_or_pula
search_provider_choice: tavily
tavily_key_validated=true
search_provider_choice: tavily
search_api_active=true
active_wizard: wizard-conectar
active_step: configure_tavily_openclaw
awaiting: tavily_plugin_activation
tavily_key_saved_env=true
tavily_plugin_activation_blocked=pairing_required_or_protected_config
active_wizard: wizard-conectar
active_step: tavily_manual_activation
awaiting: run_openclaw_configure_section_web_or_confirm_search_ok
tavily_plugin_enabled=true
web_search_provider: tavily
conectado: true
active_wizard: wizard-conectar
active_step: complete
awaiting: none
first_win_candidate: log_jornada_setup
first_win_artifact: content/drafts/log-jornada-setup-2026-07-03.md
