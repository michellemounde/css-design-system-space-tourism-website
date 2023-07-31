/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor: "ffffffde",
    fontFamily: {
      sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"]
    },
    colors: {
      white: {
        light: "ffffffde",
        DEFAULT: "ffffff",
        dark: "f9f9f9"
      },
      purple: {
        light: "d0d6f9",
        default: "747bff",
        dark: "535bf2",
        darkest: "646cff",
      },
      black: {
        light: "242424",
        DEFAULT: "1a1a1a",
        dark: "0b0d17"
      },
      midnight: {
        light: '213547'
      }
    },
    extend: {
      fontFamily: {
        inherit: ['inherit'],
      }
    },
  },
  plugins: [],
}
