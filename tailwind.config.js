/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F4C81",
        secondary: "#1E90FF",
        accent: "#22C55E",
        background: "#F8FAFC",
        text: "#0F172A",
        muted: "#64748B",
        border: "#E2E8F0",
      },
    },
  },
  plugins: [],
};
