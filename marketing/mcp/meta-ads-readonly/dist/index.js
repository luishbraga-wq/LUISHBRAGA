#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { MetaClient, optionalEnv, requireEnv } from "./metaClient.js";
const accessToken = requireEnv("META_ACCESS_TOKEN");
const apiVersion = process.env.META_API_VERSION || "v21.0";
const defaultAdAccountId = optionalEnv("META_AD_ACCOUNT_ID");
const meta = new MetaClient({ accessToken, apiVersion });
function text(data) {
    return {
        content: [
            {
                type: "text",
                text: typeof data === "string" ? data : JSON.stringify(data, null, 2),
            },
        ],
    };
}
function normalizeAdAccountId(input) {
    const id = input || defaultAdAccountId;
    if (!id)
        throw new Error("Informe adAccountId ou configure META_AD_ACCOUNT_ID. Exemplo: act_1234567890");
    return id.startsWith("act_") ? id : `act_${id}`;
}
const server = new McpServer({
    name: "meta-ads-readonly",
    version: "0.1.0",
});
server.tool("meta_list_ad_accounts", "Lista contas de anúncio disponíveis para o token atual.", {
    limit: z.number().int().min(1).max(100).default(25),
}, async ({ limit }) => {
    const result = await meta.get("me/adaccounts", {
        fields: "id,account_id,name,account_status,currency,timezone_name,business{name}",
        limit,
    });
    return text(result);
});
server.tool("meta_get_campaigns", "Lista campanhas da conta de anúncio.", {
    adAccountId: z.string().optional().describe("ID da conta. Ex: act_123 ou 123. Se vazio usa META_AD_ACCOUNT_ID."),
    effectiveStatus: z.string().optional().describe("Ex: ACTIVE, PAUSED, ARCHIVED. Se vazio retorna padrão da API."),
    limit: z.number().int().min(1).max(100).default(25),
}, async ({ adAccountId, effectiveStatus, limit }) => {
    const account = normalizeAdAccountId(adAccountId);
    const params = {
        fields: "id,name,status,effective_status,objective,buying_type,daily_budget,lifetime_budget,created_time,updated_time",
        limit,
    };
    if (effectiveStatus)
        params.effective_status = `['${effectiveStatus}']`;
    const result = await meta.get(`${account}/campaigns`, params);
    return text(result);
});
server.tool("meta_get_spend_today", "Mostra gasto de hoje da conta de anúncio.", {
    adAccountId: z.string().optional().describe("ID da conta. Ex: act_123 ou 123. Se vazio usa META_AD_ACCOUNT_ID."),
}, async ({ adAccountId }) => {
    const account = normalizeAdAccountId(adAccountId);
    const result = await meta.get(`${account}/insights`, {
        fields: "spend,impressions,clicks,cpc,cpm,ctr,reach,actions,cost_per_action_type",
        date_preset: "today",
        level: "account",
    });
    return text(result);
});
server.tool("meta_get_insights", "Busca insights de campanhas, conjuntos, anúncios ou conta.", {
    adAccountId: z.string().optional().describe("ID da conta. Ex: act_123 ou 123. Se vazio usa META_AD_ACCOUNT_ID."),
    level: z.enum(["account", "campaign", "adset", "ad"]).default("campaign"),
    datePreset: z.string().default("last_7d").describe("Ex: today, yesterday, last_7d, last_14d, last_30d, this_month."),
    limit: z.number().int().min(1).max(100).default(25),
}, async ({ adAccountId, level, datePreset, limit }) => {
    const account = normalizeAdAccountId(adAccountId);
    const result = await meta.get(`${account}/insights`, {
        fields: "campaign_id,campaign_name,adset_id,adset_name,ad_id,ad_name,spend,impressions,reach,clicks,cpc,cpm,ctr,actions,cost_per_action_type",
        level,
        date_preset: datePreset,
        limit,
    });
    return text(result);
});
server.tool("meta_diagnose_delivery", "Diagnóstico read-only simples: campanhas ativas e métricas dos últimos 7 dias.", {
    adAccountId: z.string().optional().describe("ID da conta. Ex: act_123 ou 123. Se vazio usa META_AD_ACCOUNT_ID."),
}, async ({ adAccountId }) => {
    const account = normalizeAdAccountId(adAccountId);
    const [campaigns, insights] = await Promise.all([
        meta.get(`${account}/campaigns`, {
            fields: "id,name,status,effective_status,objective,daily_budget,lifetime_budget",
            effective_status: "['ACTIVE']",
            limit: 100,
        }),
        meta.get(`${account}/insights`, {
            fields: "campaign_id,campaign_name,spend,impressions,reach,clicks,cpc,cpm,ctr,actions,cost_per_action_type",
            level: "campaign",
            date_preset: "last_7d",
            limit: 100,
        }),
    ]);
    return text({
        note: "Diagnóstico somente leitura. Não executa alterações em campanhas ou orçamento.",
        activeCampaigns: campaigns,
        last7dInsights: insights,
    });
});
const transport = new StdioServerTransport();
await server.connect(transport);
