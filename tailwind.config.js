/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#d9832e',
        'dark': '#090a0c',
        'light-gray': '#090a0ccc',
        'lighter-gray': '#555a64'
      },
      backgroundColor: {
        'primary': '#d9832e',
        'dark': '#090a0c'
      },
      borderColor: {
        'primary': '#d9832e',
        'dark': '#090a0c'
      },
      padding: {
        '15': '15px',
      },
      boxShadow: {
        'light': '0px 3px 10px 0px rgba(38, 59, 94, 0.1)',
        'light-dark': '0px 30px 60px 0px rgba(38, 59, 94, 0.1)',
      },
    },
    screens: {
      'xsm': '576px',
      'sm': '640px',
      'md': '768px',
      'xmd': '992px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
