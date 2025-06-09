/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 aqui já cobre arquivos .tsx
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
}
