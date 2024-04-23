import type { Config } from "tailwindcss";

const colors = require('./src/themes/colors')

const {fontSize, lineHeight, fontWeight, fontFamilies} = require('./src/themes/typography')

const {spacing, border, borderRadius, zIndex} = require('./src/themes/metrics')

const breakpoints = require('./src/themes/breakpoints')


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {},
      colors,
      lineHeight,
      borderWidth: border,
      borderRadius,
    
    },

 
  },
  plugins: [],
};
export default config;
