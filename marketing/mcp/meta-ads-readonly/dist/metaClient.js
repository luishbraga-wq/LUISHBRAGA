export class MetaApiError extends Error {
    status;
    payload;
    constructor(message, status, payload) {
        super(message);
        this.status = status;
        this.payload = payload;
        this.name = "MetaApiError";
    }
}
export class MetaClient {
    config;
    baseUrl;
    constructor(config) {
        this.config = config;
        this.baseUrl = `https://graph.facebook.com/${config.apiVersion}`;
    }
    async get(path, params = {}) {
        const url = new URL(`${this.baseUrl}/${path.replace(/^\//, "")}`);
        url.searchParams.set("access_token", this.config.accessToken);
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined && value !== "")
                url.searchParams.set(key, String(value));
        }
        const res = await fetch(url);
        const json = await res.json().catch(() => ({}));
        if (!res.ok) {
            throw new MetaApiError(json?.error?.message ?? `Meta API error ${res.status}`, res.status, json);
        }
        return json;
    }
}
export function requireEnv(name) {
    const value = process.env[name];
    if (!value)
        throw new Error(`Missing required environment variable: ${name}`);
    return value;
}
export function optionalEnv(name) {
    const value = process.env[name];
    return value && value.trim() ? value.trim() : undefined;
}
