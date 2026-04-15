"use client";

import { useLayoutEffect, useState } from "react";

/** Public file in `/public` — served as a static asset (reliable on Vercel). */
const SIMULA_CHARACTER_IMAGE_PATH = "/superman.jpeg";

function urlFromEnv(): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  if (!base) return "";
  try {
    return new URL(SIMULA_CHARACTER_IMAGE_PATH, `${base}/`).href;
  } catch {
    return "";
  }
}

/**
 * Absolute HTTPS URL to the character image for Simula (`charImage` / `char_image`).
 * Always syncs to `window.location.origin` on the client so production matches the
 * hostname you’re actually on (apex, www, custom domain) — build-time env alone is often wrong.
 */
export function useSimulaCharacterImageUrl(): string {
  const [url, setUrl] = useState(urlFromEnv);

  useLayoutEffect(() => {
    setUrl(new URL(SIMULA_CHARACTER_IMAGE_PATH, `${window.location.origin}/`).href);
  }, []);

  return url;
}
