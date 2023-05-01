/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#C25100",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#a6adbb",
          "base-100": "#0C0700",
        },
      },
    ],
  },
}

