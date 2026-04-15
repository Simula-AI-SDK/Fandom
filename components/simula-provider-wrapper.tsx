"use client";

import { SimulaProvider } from "@simula/ads";
import { SimulaMinigamePortraitFix } from "@/components/simula-minigame-portrait-fix";

export function SimulaProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SimulaProvider apiKey={process.env.NEXT_PUBLIC_SIMULA_ID || ''}>
      <SimulaMinigamePortraitFix />
      {children}
    </SimulaProvider>
  );
}
