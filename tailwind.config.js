/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'azure': '#0078D7',
        'steel': '#4B4B4B',
      },
    },
  },
  plugins: [],
};
