/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#f5f5f5',
        header: '#edbeba',
        'text-done': '#dddddd',
        'text-sort': '#acacac',
        'border-sort': '#eddada',
        completed: '#a0d3c8',
      },
    },
  },
  plugins: [],
};
