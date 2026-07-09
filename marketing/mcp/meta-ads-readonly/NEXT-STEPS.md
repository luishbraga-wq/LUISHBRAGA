# Próximos passos — Meta Ads MCP

## 1. Criar/validar app na Meta

Acesse:

https://developers.facebook.com/apps/

Crie ou use um app do tipo Business.

## 2. Ativar Marketing API

No app, adicione o produto Marketing API.

## 3. Gerar token com permissão de leitura

Permissão inicial recomendada:

- `ads_read`

Evite começar com `ads_management`, pois permite alterações em campanhas/orçamentos.

## 4. Descobrir conta de anúncio

Depois de configurar o token, rode a ferramenta:

```text
meta_list_ad_accounts
```

Anote o ID no formato:

```text
act_1234567890
```

## 5. Configurar `.env`

```bash
cd /data/.openclaw/workspace/marketing/mcp/meta-ads-readonly
cp .env.example .env
```

Editar `.env`:

```env
META_ACCESS_TOKEN=...
META_API_VERSION=v21.0
META_AD_ACCOUNT_ID=act_1234567890
```

## 6. Build validado

O TypeScript foi validado com:

```bash
./node_modules/.bin/tsc --noEmit
./node_modules/.bin/tsc
```

Observação: `pnpm install/build` pode reclamar de `esbuild` por política de build scripts do ambiente. O build direto com `tsc` funciona.
