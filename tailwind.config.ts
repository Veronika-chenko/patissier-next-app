/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        lg: '1224px',
      },
      backgroundImage: {
        'hero-mobile':
          "linear-gradient(to top, rgba(3, 3, 5, 0.89), rgba(3, 3, 5, 0.089)), url('/images/hero/hero.jpg')",
        'hero-desktop': "url('/images/hero/hero.jpg')",
        'read-more-link': "url('/images/arrows/arrowForward.svg')",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      grey: '#b5b5b5',
      'accent-text': '#ff852d',
      'accent-dark': '#ff6b00',
      'main-bg': '#030305',
      gradient: 'rgba(3, 3, 5, 0.89)',
      black: '000000',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
    },
  },
  plugins: [],
};
