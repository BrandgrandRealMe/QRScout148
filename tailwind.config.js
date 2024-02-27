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
        red: { rhr: '#ff0000' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
