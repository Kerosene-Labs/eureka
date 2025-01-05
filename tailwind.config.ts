import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "media",
  theme: {
    extend: {
      screens: {
        desktop: "1280px",
      },
      width: {
        comfy: "43.75rem",
      },
    },
  },

  plugins: [],
} satisfies Config;
