/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',

  theme: {
    extend: {
      screens: {
        'xmd': '814px',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',
      },

      colors:{
        body:"#040813",
        primary: '#030610',
        secondary: '#322a77',
        third: '#ff88fe',
        forth: '#916eff',
        fifth: '#8d9dfe',
      },
    },
    fontFamily: {
      yekan: ['yekan','sans-serif'],
      yekanBold: ['yekanBold','sans-serif'],
      yekanBlack: ['yekanBlack','sans-serif'],
    },
    boxShadow: {
      'btn': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    }
  },
  plugins: [],
};
