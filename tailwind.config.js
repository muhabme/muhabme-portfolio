/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a192f',
                dark: '#495670',
                slate: '#8892b0',
                light: '#a8b2d1',
                lightest: '#ccd6f6',
                lightnavy: '#112240',
                lightestnavy: '#233554',
                navyshadow: 'rgba(2, 12, 27, 0.7)',
                theme: '#9d00ff',
            },
            fontSize: {
                giant: 'clamp(40px, 8vw, 80px)',
            },
        },
    },
    plugins: [],
};
