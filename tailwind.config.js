/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Brown900: "#522C1C",
        Brown700: "#BE743A",
        Brown500: "#E2AE83",
        Brown100: "#F5E6DC",
      },
    },
  },
  plugins: [],
};
