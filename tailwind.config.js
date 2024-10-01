/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        colors: {
            green: '#A0FF1F',
            pink: '#F70087',
            black: '#000000',
            white: '#FFFFFF',
            gray: {
                dark: '#5B5B5B',
                DEFAULT: '#C3C3C3',
                light: '#F8F8F8',
            },
            success: '#00ED71',
            error: '#F40256',
        },
        screens: {
            mobile: '360px',
            tablet: '880px',
            laptop: '1024px',
            desktop: '1290px',
        },
        fontFamily: {
            poppins: ['var(--font-poppins)'],
            anonymous: ['var(--font-anonymous-pro)'],
        },
        fontSize: {
            xs: ['12px', '18px'],
            '2xl': ['24px', '38px'],
            '3xl': ['32px', '48px'],
        },
    },
},
  plugins: [],
}

