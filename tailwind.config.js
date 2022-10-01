/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '0.75rem',
    },
    colors: {
      'white': '#ffffff',
      'text': '#212121',
      'light': '#f1f1f1',
      'main': '#eeeeee',
      'dark': '#999999',
    },
    extend: {

    },
    plugins: [],
  }
}

