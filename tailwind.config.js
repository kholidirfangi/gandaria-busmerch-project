module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode : 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
        animation: {
        'ping-slow': 'ping 1s linear infinite',
      }
    },
  },
  plugins: [],
}
