module.exports = {
  purge: {
    enabled: process.env.TAILWIND_MODE === 'build',
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      color: {
        inherit: 'inherit',
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
