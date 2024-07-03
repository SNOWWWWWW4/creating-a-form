import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  
    screens: {

      'mini': '420px',

      'mobile': '600px',

      'sm': '640px',

      'md': '768px',

      'tablet': '770px',

      'lg': '1024px',

      'computer': '1175px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'mainBg': 'url(/formbg.png)',
        'studentBg' : 'url(/night4.jpg)',
        'toastBg': 'url(/stars.jpg)'
      },
      fontFamily: {
        mainFont : ['mainFont']
      },
      colors: {
        'studentDirect': 'rgba(218,189,212, 0.8)'
      }
    }
  },
  plugins: [],
};
export default config;
