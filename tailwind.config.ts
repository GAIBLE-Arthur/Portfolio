import type { Config } from "tailwindcss";

// Colors are CSS variables in app/globals.css; change them there.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        surface: "var(--color-surface)",
        "surface-alt": "var(--color-surface-alt)",
        paper: "var(--color-paper)",
        border: "var(--color-border)",
        "border-dark": "var(--color-border-dark)",
        "on-dark": "var(--color-on-dark)",
        "on-dark-muted": "var(--color-on-dark-muted)",
        accent: "var(--color-accent)",
        "accent-strong": "var(--color-accent-strong)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
