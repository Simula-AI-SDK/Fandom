"use client";

import { SimulaProvider } from "@simula/ads";

export function SimulaProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SimulaProvider apiKey={process.env.NEXT_PUBLIC_SIMULA_ID || ''}>
      {children}
    </SimulaProvider>
  );
}
