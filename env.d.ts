/// <reference types="@cloudflare/workers-types" />

export {};

declare global {
  interface Env {
    ENVIRONMENT?: string;
  }
}

declare module "react-router" {
  interface AppLoadContext {
    cloudflare: {
      env: Env;
      ctx: ExecutionContext;
    };
  }
}
