import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: "#ebf9ff",
          100: "#d1f1ff",
          200: "#aee8ff",
          300: "#76dcff",
          400: "#36c5ff",
          500: "#08a2ff",
          600: "#007dff",
          700: "#0064ff",
          800: "#0051d6",
          900: "#03152f",
        },
        turquoise: {
          50: "#f0fdf9",
          100: "#cdfaee",
          200: "#9bf4de",
          300: "#61e7ca",
          400: "#42d5ba",
          500: "#17b59b",
          600: "#0f927e",
          700: "#117466",
          800: "#125d54",
          900: "#144d46",
          950: "#052e2b",
        },
        brightSun: {
          50: "#fffbeb",
          100: "#fff3c6",
          200: "#ffe588",
          300: "#ffd147",
          400: "#ffbd20",
          500: "#f99b07",
          600: "#dd7402",
          700: "#b75006",
          800: "#943d0c",
          900: "#7a330d",
          950: "#461902",
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
};

export default config;
