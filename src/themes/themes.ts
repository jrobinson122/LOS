// src/themes/losTheme.ts

export const losTheme = {
  colors: {
    background: "#050506",
    surface: "#0B0B0E",
    surfaceGlass: "rgba(10, 10, 14, 0.72)",

    text: "#F4F0E8",
    textMuted: "rgba(244, 240, 232, 0.68)",

    accent: "#74F7FF",
    accentHot: "#FF3B8D",
    border: "rgba(244, 240, 232, 0.14)",
  },

  typography: {
    fontFamily: `"Inter", "Helvetica Neue", Arial, sans-serif`,
    displayFamily: `"Arial Black", "Impact", sans-serif`,
    letterSpacingWide: "0.16em",
  },

  effects: {
    glowCyan: "0 0 32px rgba(116, 247, 255, 0.24)",
    glowPink: "0 0 32px rgba(255, 59, 141, 0.24)",
    background:
      "radial-gradient(circle at 20% 20%, rgba(116, 247, 255, 0.16), transparent 28%), radial-gradient(circle at 80% 30%, rgba(255, 59, 141, 0.14), transparent 30%), #050506",
  },

  brand: {
    name: "Love. Obsessed. Scared.",
    shortName: "LOS",
    tagline: "Ethical clothing for the in-between hours.",
  },
} as const;

export type LosTheme = typeof losTheme;