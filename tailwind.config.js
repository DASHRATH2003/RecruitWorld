/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#033A78',  // Main blue color
          light: '#0A4A98',    // Lighter shade for hover states
          dark: '#022B5C',     // Darker shade for active states
        },
        accent: {
          DEFAULT: '#FF3C38',  // Red accent color
          light: '#FF5C58',    // Lighter shade for hover states
          dark: '#E62C28',     // Darker shade for active states
        }
      }
    },
  },
  plugins: [],
}

