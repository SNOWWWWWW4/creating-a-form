import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  
    screens: {

      'mobile': '600px',

      'sm': '640px',

      'md': '768px',

      'tablet': '770px',

      'lg': '1024px',

      'computer': '1175px',

      'xl': '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
};
export default config;
