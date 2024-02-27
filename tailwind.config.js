module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rhr: ['"rockwell nova"'],
        'rhr-ns': ['"SF Sports Night NS"'],
      },
      colors: {
        red: { rhr: '#ef3340' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
