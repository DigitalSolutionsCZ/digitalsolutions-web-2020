module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': [
          'Muli',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        blue: {
          100: "#50cdff",
          200: "#3cb9ff",
          300: "#28a5ed",
          400: "#1491d9",
          500: "#007DC5",
          600: "#0069b1",
          700: "#00559d",
          800: "#004189",
          900: "#002d75"
        },
        green: {
          100: "#c2ff94",
          200: "#aefb80",
          300: "#9ae76c",
          400: "#86d358",
          500: "#72BF44",
          600: "#5eab30",
          700: "#4a971c",
          800: "#368308",
          900: "#226f00"
        },
        gray: {
          300: '#f2f2f2',
        },
      },
      linearGradientDirections: {
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      linearGradientColors: theme => ({
        'blue-green': [theme('colors.blue.500') , theme('colors.green.500')],
      }),
      fontSize: {
        xs: ".875rem",
        sm: "1rem",
        base: "1.125rem",
        lg: "1.25rem",
        xl: "1.625rem",
        "2xl": "2.375rem",
        "3xl": "3.75rem"
      },
      maxWidth: {
        "screen-2xl": "1400px",
      },
      screens: {
        xs: '360px',
        sm: `640px`,
        md: `768px`,
        lg: `1024px`,
        xl: `1280px`,
      },
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    linearGradients: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
},
  plugins: [
    require('tailwindcss-gradients'),
  ]
};
