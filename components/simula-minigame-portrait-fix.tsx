"use client";

import { useEffect } from "react";

const GAME_IFRAME_LABEL = "Game iframe";

const PORTRAIT_WIDTH =
  "min(26.25rem, calc(100vw - 2rem), calc((100dvh - 2rem) * 9 / 16))";
const PORTRAIT_HEIGHT = `min(calc(100dvh - 2rem), calc(${PORTRAIT_WIDTH} * 16 / 9))`;

function applyPortraitFrame(overlay: HTMLElement) {
  const inner = Array.from(overlay.children).find(
    (el): el is HTMLDivElement => el.tagName === "DIV",
  );
  if (!inner) return;

  inner.style.setProperty("width", PORTRAIT_WIDTH, "important");
  inner.style.setProperty("height", PORTRAIT_HEIGHT, "important");
  inner.style.setProperty("max-height", "calc(100dvh - 2rem)", "important");
  inner.style.setProperty("border-radius", "1.75rem", "important");
  inner.style.setProperty("overflow", "hidden", "important");
  inner.style.setProperty(
    "box-shadow",
    "0 1.5rem 4rem rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.06)",
    "important",
  );

  overlay.style.setProperty("align-items", "center", "important");
  overlay.style.setProperty("justify-content", "center", "important");
  overlay.style.setProperty(
    "padding",
    "max(12px, env(safe-area-inset-top)) max(12px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left))",
    "important",
  );
}

/**
 * @simula/ads GameIframe applies width/height via inline styles on every render,
 * which overrides global CSS. We re-apply portrait constraints with
 * setProperty(..., "important") whenever that DOM updates.
 */
export function SimulaMinigamePortraitFix() {
  useEffect(() => {
    let styleObserver: MutationObserver | null = null;
    let tracked: { overlay: HTMLElement; inner: HTMLDivElement } | null = null;

    const disconnectStyleObserver = () => {
      styleObserver?.disconnect();
      styleObserver = null;
      tracked = null;
    };

    const attachStyleWatch = (overlay: HTMLElement) => {
      const inner = Array.from(overlay.children).find(
        (el): el is HTMLDivElement => el.tagName === "DIV",
      );
      if (!inner) return;

      if (
        tracked?.overlay === overlay &&
        tracked?.inner === inner &&
        styleObserver
      ) {
        applyPortraitFrame(overlay);
        return;
      }

      disconnectStyleObserver();
      tracked = { overlay, inner };

      const schedule = () => {
        requestAnimationFrame(() => applyPortraitFrame(overlay));
      };

      styleObserver = new MutationObserver(schedule);
      styleObserver.observe(inner, {
        attributes: true,
        attributeFilter: ["style"],
      });
      styleObserver.observe(overlay, {
        attributes: true,
        attributeFilter: ["style"],
      });

      schedule();
    };

    const onDomChange = () => {
      const overlay = document.querySelector<HTMLElement>(
        `[aria-label="${GAME_IFRAME_LABEL}"]`,
      );
      if (!overlay) {
        disconnectStyleObserver();
        return;
      }
      attachStyleWatch(overlay);
    };

    const onResize = () => {
      const overlay = document.querySelector<HTMLElement>(
        `[aria-label="${GAME_IFRAME_LABEL}"]`,
      );
      if (overlay) applyPortraitFrame(overlay);
    };

    const treeObserver = new MutationObserver(onDomChange);
    treeObserver.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("resize", onResize);

    onDomChange();

    return () => {
      treeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      disconnectStyleObserver();
    };
  }, []);

  return null;
}
