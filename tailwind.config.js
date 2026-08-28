/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b0e14",
        secondary: "#111620",
        surface: "#161b26",
        accent: {
          DEFAULT: "#2dd4bf",
        },
        teal: {
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-teal": "linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%)",
        "gradient-accent": "linear-gradient(135deg, #2dd4bf 0%, #5eead4 100%)",
        "gradient-dark": "linear-gradient(180deg, #0b0e14 0%, #111620 50%, #0b0e14 100%)",
      },
      fontSize: {
        "10xl": "10rem",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-teal": "glowTeal 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowTeal: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(45, 212, 191, 0.3)" },
          "50%": { boxShadow: "0 0 35px rgba(45, 212, 191, 0.55)" },
        },
      },
      boxShadow: {
        "glow-teal": "0 0 30px rgba(45, 212, 191, 0.25)",
      },
    },
  },
  plugins: [],
};
