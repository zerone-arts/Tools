import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "3xl": "2px 10px 40px -12px rgb(255 255 255 / 0.25)",
      },
      animation: {
        copyAnimate: "copyAnimate 3s linear",
      },
      keyframes: {
        copyAnimate: {
          "50%": { opacity: "1" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
