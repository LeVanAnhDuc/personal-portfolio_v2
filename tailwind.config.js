/** @type {import('tailwindcss').Config} \*/
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#65B741',
                    200: '#86A789',
                    300: '#b1b493',
                },
                secondary: {
                    100: '#f8f9fa',
                },
            },
            spacing: {
                18: '4.5rem',
                120: '30rem',
                128: '32rem',
                140: '35rem',
                144: '36rem',
                148: '37rem',
                152: '38rem',
                156: '39rem',
            },
        },
    },
    plugins: [],
};
