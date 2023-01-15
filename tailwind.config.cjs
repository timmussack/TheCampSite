module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
      extend: {
          screens: {
            'md': '768px',
          },
          colors: {
              primary: '#212121',
              secondary: '#616161',
              pop: '#6D9886'
          },
          fontFamily: {
            primary: ['Jost', 'sans-serif'],
          }
      },
  },
  plugins: [],
};