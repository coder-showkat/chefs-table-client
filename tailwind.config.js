/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "script": ["Dancing Script", "cursive"],
      "playfair": ["Playfair Display", "serif"],
      "open-sans": ["Open Sans", "sans-serif"]
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EA8115",
          secondary: "#d1c7ba",
          accent: "#7A8D1B",
          neutral: "#dacfc0",
          "base-100": "#0C0700",
        },
      },
      
    ],
  },
}