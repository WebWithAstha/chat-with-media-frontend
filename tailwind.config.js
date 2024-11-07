/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#059669", // Green color
        background: "#1A1A1A", // Dark background color
        text: "#FFFFFF", // White text
      },
    },
  },
  plugins: [],
}