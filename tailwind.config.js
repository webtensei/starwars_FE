/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    './src/*.{js,jsx,ts,tsx}',
    './src/components/*.{js,jsx,ts,tsx}',
    './src/components/UI/*.{js,jsx,ts,tsx}',
    './src/pages/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        desktop: '1440px',
      },
      colors: {
        primary: {
          background: 'rgb(14,14,28)',
          layout: 'rgb(22,27,71)',
          yellow: 'rgb(255,233,25)',
          action: 'rgb(225,225,225)',
        },
        gender: {
          male: 'rgb(0,165,255)',
          female: 'rgb(243,115,166)',
          undefined: 'rgb(225,225,225)',
        },
      },
    },
  },
  plugins: [],
};
