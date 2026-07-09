# MCP Meta Ads Read-only

MCP para consultar Meta Ads com segurança, sem alterar campanhas, orçamento ou anúncios.

## O que ele faz

Ferramentas disponíveis:

- `meta_list_ad_accounts` — lista contas de anúncio acessíveis pelo token.
- `meta_get_campaigns` — lista campanhas.
- `meta_get_spend_today` — mostra gasto de hoje.
- `meta_get_insights` — traz insights por conta, campanha, conjunto ou anúncio.
- `meta_diagnose_delivery` — diagnóstico simples de campanhas ativas + últimos 7 dias.

## O que ele NÃO faz

- Não cria campanha.
- Não pausa campanha.
- Não altera orçamento.
- Não altera anúncios.
- Não mexe em dinheiro.

Essa primeira versão é intencionalmente read-only.

## Requisitos na Meta

No Meta Developers / Business Manager:

1. Criar app tipo Business.
2. Ativar Marketing API.
3. Gerar token com permissão `ads_read`.
4. Garantir que o usuário/sistema tenha acesso à conta de anúncios.

Permissões futuras para escrita, se um dia quiser:

- `ads_management`
- `business_management`

Mas não use essas permissões nesta primeira versão se o objetivo for só relatório.

## Instalação

```bash
cd /data/.openclaw/workspace/marketing/mcp/meta-ads-readonly
pnpm install
pnpm build
```

## Variáveis de ambiente

Copie o exemplo:

```bash
cp .env.example .env
```

Preencha:

```env
META_ACCESS_TOKEN=seu_token
META_API_VERSION=v21.0
META_AD_ACCOUNT_ID=act_1234567890
```

`META_AD_ACCOUNT_ID` é opcional. Se não souber, rode primeiro a ferramenta `meta_list_ad_accounts`.

## Configuração MCP — exemplo genérico

Adicione um servidor MCP apontando para:

```bash
node /data/.openclaw/workspace/marketing/mcp/meta-ads-readonly/dist/index.js
```

Com ambiente:

```env
META_ACCESS_TOKEN=...
META_API_VERSION=v21.0
META_AD_ACCOUNT_ID=act_...
```

## Prompts úteis

Depois de conectado:

```text
Liste minhas contas de anúncio da Meta.
```

```text
Quanto gastei hoje na conta de anúncios?
```

```text
Compare as campanhas dos últimos 7 dias e diga quais merecem atenção.
```

```text
Faça um diagnóstico read-only das campanhas ativas. Não altere nada.
```

## Segurança

- Nunca cole token em chat público.
- Não commitar `.env`.
- Começar com `ads_read`.
- Qualquer versão com escrita deve exigir confirmação explícita antes de mexer em orçamento/campanhas.
