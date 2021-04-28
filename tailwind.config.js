const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            main: '#424242',
            accent: '#FFF59D',
            accenthov: '#FFCA28',
            accentsub: '#FFD180',
            accentsubhov: '#FF8F00',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            blue: colors.blue,
            emerald: colors.emerald,
            yellow: colors.amber,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
