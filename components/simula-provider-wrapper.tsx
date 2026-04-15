"use client";

import { SimulaProvider } from "@simula/ads";
import { SimulaMinigamePortraitFix } from "@/components/simula-minigame-portrait-fix";

const SIMULA_KEY_PLACEHOLDER = "__NEXT_PUBLIC_SIMULA_ID_UNSET__";

export function SimulaProviderWrapper({ children }: { children: React.ReactNode }) {
  const raw = process.env.NEXT_PUBLIC_SIMULA_ID;
  const apiKey =
    typeof raw === "string" && raw.trim().length > 0 ? raw.trim() : SIMULA_KEY_PLACEHOLDER;

  return (
    <SimulaProvider apiKey={apiKey}>
      <SimulaMinigamePortraitFix />
      {children}
    </SimulaProvider>
  );
}
