//tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   darkMode: 'class',
   theme: {
     extend: {
       colors: {
         primary: {
           600: '#064e60',
         },
         accent: '#eb6200',
         success: '#347e16',
         warning: '#fb8d0e',
         danger: '#ff0000',
         neutral: '#677e85',
       },
     },
   },
   plugins: [
     require('@tailwindcss/aspect-ratio'),
   ],
 }