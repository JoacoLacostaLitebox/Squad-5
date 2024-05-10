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
        'fukuro-blue': '#0000FE',
        'fukuro-orange': '#FF5A00',
        'fukuro-white': '#F9F6ED',
        'fukuro-black': '#282828',
        'fukuro-bone': '#F5EDCC',
      }
    },
  },
  plugins: [],
};
export default config;
