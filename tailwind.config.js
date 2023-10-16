const themeConfig = require('./src/shared/ui/theme/config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.{js,jsx,ts,tsx}', './src/screens/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        ...themeConfig.gradients,
      },
      colors: {
        ...themeConfig.colors,
      },
      fontSize: {
        ...themeConfig.fontSize,
      },
      fontFamily: {
        ...themeConfig.fontFamily,
      },
      boxShadow: {
        ...themeConfig.shadows,
      },
    },
  },
  plugins: [],
};
