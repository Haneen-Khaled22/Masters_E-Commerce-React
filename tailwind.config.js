/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: '#35AFA0',
          red: "#D51243",
          green: '#00B853',
          yellow: "#FFCD00",
          grey: "#EDEEF5",
          light: '#C2C2D3',
        },
      },
    },
  },
  plugins: [],
};