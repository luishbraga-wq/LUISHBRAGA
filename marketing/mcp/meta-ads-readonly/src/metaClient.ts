export type MetaClientConfig = {
  accessToken: string;
  apiVersion: string;
};

export class MetaApiError extends Error {
  constructor(message: string, public status?: number, public payload?: unknown) {
    super(message);
    this.name = "MetaApiError";
  }
}

export class MetaClient {
  private baseUrl: string;

  constructor(private config: MetaClientConfig) {
    this.baseUrl = `https://graph.facebook.com/${config.apiVersion}`;
  }

  async get<T>(path: string, params: Record<string, string | number | boolean | undefined> = {}): Promise<T> {
    const url = new URL(`${this.baseUrl}/${path.replace(/^\//, "")}`);
    url.searchParams.set("access_token", this.config.accessToken);

    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== "") url.searchParams.set(key, String(value));
    }

    const res = await fetch(url);
    const json = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new MetaApiError(
        json?.error?.message ?? `Meta API error ${res.status}`,
        res.status,
        json
      );
    }

    return json as T;
  }
}

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export function optionalEnv(name: string): string | undefined {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : undefined;
}
