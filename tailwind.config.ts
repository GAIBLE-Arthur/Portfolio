import type { Config } from "tailwindcss";

// Colors are CSS variables in app/globals.css; change them there.

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        line: "var(--color-line)",
        paper: "var(--color-paper)",
        accent: "var(--color-accent)",
        "accent-strong": "var(--color-accent-strong)",
        "accent-soft": "var(--color-accent-soft)",
        warm: "var(--color-warm)",
        "warm-soft": "var(--color-warm-soft)",
      },
    },
  },
  plugins: [],
};

export default config;
