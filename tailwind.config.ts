import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
        navyDeep: "#0a1628",
        navyPrimary: "#1e3a5f",
        tealModern: "#14b8a6",
        tealDeeper: "#0d9488",
        tealCyan: "#06b6d4",
        greenSuccess: "#059669",
        amber: "#d97706",
        clinicalBlue: "#3b82f6",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
