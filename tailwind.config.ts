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
        primary: {
          DEFAULT: "#2A4B7B",
          dark: "#1a3050",
          light: "#3a5b8b",
        },
        secondary: {
          DEFAULT: "#FBC13A",
          dark: "#e5a820",
          light: "#fcd15a",
        },
        accent: {
          green: "#4CAF50",
          blue: "#2196F3",
          orange: "#FF9800",
        },
      },
      fontFamily: {
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

