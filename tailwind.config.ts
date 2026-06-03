import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#00823b",
          primaryHover: "#00662e",
          dark: "#1b365d",
          darkDeep: "#0b1c33",
          darkMid: "#2d4e7a",
          darkHover: "#142847",
          darkBorder: "#0f1f3a",
          accent: "#f37021",
          background: "#f8fafc",
          border: "#e2e8f0",
        },
        primary: {
          teal: "#00823b",       // alias: brand green
          greenDark: "#00662e",  // alias: brand green hover
          cyan: "#00662e",       // legacy alias — use primary.greenDark
          orange: "#f37021",     // alias: brand orange accent
          purple: "#f37021",     // legacy alias — use primary.orange
          indigo: "#1b365d",     // alias: brand navy
        },
        accent: {
          emerald: "#00823b",    // alias: brand green
          orange: "#f37021",     // alias: brand orange accent
          violet: "#f37021",     // legacy alias — use accent.orange
        },
        dark: {
          900: "#0b1c33",
          800: "#1b365d",
          700: "#2d4e7a",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #00823b 0%, #1b365d 50%, #f37021 100%)",
        "gradient-hero": "linear-gradient(135deg, #0b1c33 0%, #1b365d 50%, #2d4e7a 100%)",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "glow": "0 0 20px rgba(0, 130, 59, 0.3)",
        "glow-accent": "0 0 20px rgba(243, 112, 33, 0.3)",
        "glow-purple": "0 0 20px rgba(243, 112, 33, 0.3)", // legacy alias
      },
    },
  },
  plugins: [],
};
export default config;

