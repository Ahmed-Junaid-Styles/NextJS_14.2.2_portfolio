import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {

      '2xs': '300px',

      'xsm': '420px',

      'vsm': '500px',

      'sm': '580px',
      // => @media (min-width: 576px) { ... }
  
      'md': '960px',
      // => @media (min-width: 960px) { ... }
  
      'lg': '1000px',
      // => @media (min-width: 1440px) { ... }

      'xlg': '1300px',
      
      '2xl': '1600px',
    },
  },
  plugins: [],
};
export default config;
