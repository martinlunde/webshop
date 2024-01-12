/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'anzac': {
          '50': '#fcf7ea',
          '100': '#f8edc9',
          '200': '#f2d896',
          '300': '#eaba53',
          '400': '#e3a12c',
          '500': '#d38a1f',
          '600': '#b66a18',
          '700': '#924b16',
          '800': '#793d1a',
          '900': '#67341c',
          '950': '#3c190c',
      },
      }
    },
  },
  plugins: [],
}

