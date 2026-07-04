export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          main: '#1A1D21',
          sidebar: '#1D2024',
          footer: '#121417',
        },
        accent: {
          red: '#D32F2F',
          yellow: '#D9A01B',
          teal: '#00A896',
          blue: '#00A3C1',
          cyan: '#00E5FF'
        }
      },
      keyframes: {
        'reverse-spin': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        'shine': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' }
        }
      },
      animation: {
        'spin-extremely-slow': 'spin 40s linear infinite',
        'spin-slow': 'spin 15s linear infinite',
        'reverse-spin': 'reverse-spin 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out infinite 3s',
        'shine': 'shine 1.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}
