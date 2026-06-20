/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#030712',      // Extremely dark obsidian gray/black
          darker: '#0B0F19',    // Midnight dark blue-gray
          accent: '#0EA5E9',    // Icy blue primary
          accentGlow: '#38BDF8',// Glowing icy blue
          silver: '#94A3B8',    // Silver secondary
          lightSilver: '#E2E8F0', // Crisp white-silver
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(14, 165, 233, 0.4)',
        'glow-blue-lg': '0 0 25px rgba(56, 189, 248, 0.6)',
        'glow-silver': '0 0 15px rgba(226, 232, 240, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
