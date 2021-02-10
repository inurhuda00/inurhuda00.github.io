module.exports = {
    purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'light-grayish-magenta': '#F7F2F7',
                'dark-grayish-magenta': '#502050',
                'soft-pink': '#EE68A4',
            },
            fontFamily: {
                spartan: ['Spartan'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
