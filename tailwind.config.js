module.exports = {
    purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        screens: {
            xs: '425px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },

        extend: {
            colors: {
                'light-grayish-magenta': '#F7F2F7',
                'dark-grayish-magenta': '#502050',
                'soft-pink': '#EE68A4',
            },
            fontFamily: {
                spartan: ['Spartan'],
                sans: ['Inter'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}
