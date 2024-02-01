import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#223126",
      secondary: "#807844",
      background: "#F7F9FD",
      white: "rgba(255, 255, 255, 0.90);",
      black: "rgba(0, 0, 0, 0.90)",
      "input-theme": "rgb(34, 34, 34)",
      "input-outline": "rgb(27, 27, 27)",
      "quiz-theme": "#1A291E",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
