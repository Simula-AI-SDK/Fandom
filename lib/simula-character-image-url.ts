/**
 * Absolute URL for `MiniGameMenu` `charImage` / Simula `char_image`.
 * Simula’s backend fetches this URL when building mini-game iframes (bubble avatars, etc.).
 * Requires a public origin — set `NEXT_PUBLIC_SITE_URL` (see `next.config.mjs` on Vercel).
 */
export function getSimulaCharacterImageUrl(): string {
  const pathname = "/api/simula-character-image";
  const base =
    typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
      : "";

  if (base) {
    try {
      return new URL(pathname, `${base}/`).href;
    } catch {
      return pathname;
    }
  }

  if (typeof window !== "undefined") {
    return new URL(pathname, `${window.location.origin}/`).href;
  }

  return pathname;
}
