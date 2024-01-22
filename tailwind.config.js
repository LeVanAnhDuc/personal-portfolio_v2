/** @type {import('tailwindcss').Config} \*/
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#DAF8E6',
                    200: '#C2F3D6',
                    300: '#ACEFC8',
                    400: '#82E6AC',
                    500: '#57DE8F',
                    600: '#2CD673',
                    700: '#22AD5C',
                    800: '#1A8245',
                },
                neutral: {
                    100: '#F4F4F6',
                    200: '#E9E9ED',
                    300: '#DDDDE3',
                    400: '#D2D2DA',
                    500: '#C7C7D1',
                    600: '#BCBCC8',
                    700: '#A5A5B6',
                    800: '#71738B',
                    900: '#0D0F35',
                },
            },
        },
    },
    plugins: [],
};
