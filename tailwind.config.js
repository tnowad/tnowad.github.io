/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0D0D0D",
        "back/50": "rgba(21, 21, 21, 0.5)",
        white: "#FFFFFF",
        "white/10": "rgba(255, 255, 255, 0.1)",
        "white/25": "rgba(255, 255, 255, 0.25)",
        "white/70": "rgba(255, 255, 255, 0.7)",
        onyx: "#181818",
        "gray-dark": "#808080",
        "gray-medium": "rgba(128, 128, 128, 0.5)",
        "gray-light": "#C5C5C5",
        "blue-light": "rgba(63, 100, 234, 0.43)",
        "red-light": "rgba(233, 63, 64, 0.43)",
        "yellow-light": "rgba(255, 184, 0, 0.43)",
        "card-border": {
          dark: "#383737",
          light: "#EBEBEB",
        },
        "white-bg": "#FBFBFB",
        "white-faint": "#F3F3F3",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
