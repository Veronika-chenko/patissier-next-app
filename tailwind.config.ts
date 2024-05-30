/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '480px',
        lg: '1224px',
      },
      backgroundImage: {
        'hero-mobile':
          "linear-gradient(to top, rgba(3, 3, 5, 0.89), rgba(3, 3, 5, 0.089)), url('/images/hero/hero.jpg')",
        'hero-desktop': "url('/images/hero/hero.jpg')",
        'courses-hero-mobile':
          "linear-gradient(62.13deg, rgba(3, 3, 5, 0.52) 15.7%, rgba(95, 95, 95, 0) 78.72%), url('/images/courses/heroCoursesMob.jpg')",
        'courses-hero-tablet':
          "linear-gradient(62.13deg, rgba(3, 3, 5, 0.52) 15.7%, rgba(95, 95, 95, 0) 78.72%), url('/images/courses/heroCoursesDesk.jpg')",
        'courses-hero-desktop': "url('/images/courses/heroCoursesDesk.jpg')",
        'read-more-link': "url('/images/arrows/arrowForward.svg')",
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      grey: '#b5b5b5',
      'accent-text': '#ff852d',
      'accent-dark': '#ff6b00',
      accent: '#ff852d',
      'main-bg': '#030305',
      'icon-bg': '#282728',
      gradient: 'rgba(3, 3, 5, 0.89)',
      black: '#000000',
      'input-bg': '#101011',
    },
    boxShadow: {
      card: '0px 0px 209px -30px #C7673833',
    },
  },
  plugins: [],
};
