/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkTheme: {
          primary: "#333333",
          secondary: "#555555",
          // Add more dark theme colors as needed
        },
      },
      lightTheme: {
        primary: "#ffffff",
        secondary: "#f0f0f0",
        // Add more light theme colors as needed
      },
    },
    fontFamily: {
      heading: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
