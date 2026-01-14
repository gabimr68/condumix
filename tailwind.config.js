/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['Cabin', 'sans-serif'], 
      },

    },
  },
  plugins: [],
};
