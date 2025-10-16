import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dokkan: {
          primary: "#f97316",
          accent: "#38bdf8",
          dark: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
