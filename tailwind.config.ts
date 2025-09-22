import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        orange :{
          400:'#EB5E3A'
        },
        blue :{
          400:'#7CA2E0'
        },
        yellow :{
          400:'#F2EDBD'
        },
        brown :{
          400:'#6C2C25'
        }
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
    },
      },
    },
  },

};
export default config;