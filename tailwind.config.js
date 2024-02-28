module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rhr: ['"rockwell nova"'],
        'rhr-ns': ['"futura-pt"'],
      },
      colors: {
        red: { rhr: '#d7272e' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
