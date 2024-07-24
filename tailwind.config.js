/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'pramiry': {
        '50': '#eef8ff',
        '100': '#d8f0ff',
        '200': '#b9e4ff',
        '300': '#89d5ff',
        '400': '#52bdff',
        '500': '#2a9dff',
        '600': '#137efd',
        '700': '#0b5ed7', //default
        '800': '#1152bc',
        '900': '#144894',
        '950': '#112d5a',
    },
    
  }
    },
  },
  plugins: [],
}

