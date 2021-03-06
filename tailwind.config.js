module.exports = {
    theme: {
        extend: {
            customForms: theme => ({
                default: {
                    input: {
                        borderRadius: theme('borderRadius.default'),
                        backgroundColor: theme('colors.white'),
                        paddingTop: null,
                        paddingRight: null,
                        paddingBottom: null,
                        paddingLeft: null,
                    },
                },
            }),
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
                gray: {
                    100: "#E9E9E9",
                    200: "#d5d5d5",
                    300: "#c1c1c1",
                    400: "#adadad",
                    500: "#999999",
                    600: "#858585",
                    700: "#717171",
                    800: "#5d5d5d",
                    900: "#494949"
                },
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
                'blue-green': [theme('colors.blue.500'), theme('colors.green.500')],
                'green-dark-green': [theme('colors.green.500'), theme('colors.green.800')],
                'red-dark-red': [theme('colors.red.400'), theme('colors.red.800')],
            }),
            fontSize: {
                xs: ".875rem",
                sm: "1rem",
                base: "1.125rem",
                lg: "1.25rem",
                xl: "1.625rem",
                "2xl": "2.175rem",
                "3xl": "3.75rem"
            },
            width: theme => ({
                auto: 'auto',
                ...theme('spacing'),
                '1/24': '4.16667%',
                '2/24': '8.33333%',
                '3/24': '12.5%',
                '4/24': '16.66667%',
                '5/24': '20.83333%',
                '6/24': '25%',
                '7/24': '29.16667%',
                '8/24': '33.33333%',
                '9/24': '37.5%',
                '10/24': '41.66667%',
                '11/24': '45.83333%',
                '12/24': '50%',
                '13/24': '54.16667%',
                '14/24': '58.33333%',
                '15/24': '62.5%',
                '16/24': '66.66667%',
                '17/24': '70.83333%',
                '18/24': '75%',
                '19/24': '79.16667%',
                '20/24': '83.33333%',
                '21/24': '87.5%',
                '22/24': '91.66667%',
                '23/24': '95.83333%',
                '26': '6.5rem',
                '36': '9rem',
                full: '100%',
                screen: '100vw',
            }),
            height: {
                '2px': '2px',
                '3px': '3px',
                '12-5': '3.125rem',
                '13': '3.25rem',
                '19': '4.75rem',
                'screen-1/2': '50vh',
            },

            minWidth: theme => ({
                ...theme('spacing'),
            }),
            maxWidth: {
                "screen-2xl": "1480px",
                "screen-3xl": "1600px",
            },
            borderColor: {
                'current': 'currentColor'
            },
            borderWidth: {
                '3': '3px'
            },

            inset: {
                '-px': '-1px',
                '-2px': '-2px',
                '-1': '-.25rem',
                'px': '1px',
                '1/2': '50%',
                'full': '100%'
            },
             opacity: {
                10: '.1'
             },
            transitionTimingFunction: {
                'snap': 'cubic-bezier(.22,.68,0,1.15)'
            },
            scale: {
                25: '25'
            },
            boxShadow: {
                'vertical-symmetric': '0px 2px 6px 2px rgba(0, 0, 0, 0.1)'
            },
        },
        screens: {
            xs: '360px',
            sm: `640px`,
            md: `768px`,
            mobileLandscape: {'raw': '(min-width: 768px) and (min-height: 640px)'},
            lg: `1024px`,
            xl: `1280px`,
            '2xl': '1400px'
        },
        aspectRatio: {
            'none': 0,
            'square': [1, 1],
            '16/9': [16, 9],
            '4/3': [4, 3],
            '21/9': [21, 9],
        },
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        linearGradients: ['responsive', 'hover', 'focus', 'group-hover'],
        boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        translate: ['responsive', 'hover', 'focus', 'group-hover'],
        aspectRatio: ['responsive'],
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundColor: ['responsive', 'hover', 'group-hover']
    },
    plugins: [
        require('tailwindcss-gradients'),
        require('tailwindcss-aspect-ratio'),
        require('@tailwindcss/custom-forms'),
    ]
};
