/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#008DDA',
        'secondary': '#41C9E2',
        'accent': '#EE6C4D'
      },
    },
  },
  plugins: [],
}

