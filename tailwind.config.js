/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Esto debe coincidir con tu carpeta src
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff6b00',
        }
      },
      boxShadow: {
        'red-glow': '0 0 60px rgba(255, 0, 0, 0.12)', // Tu toque rojo
      }
    },
  },
  plugins: [],
}