/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '25': '100px',
      },
      boxShadow: {
        'darkbox': '2px 2px 0px 0px #000',
        'numberButton': '1.44px 1.44px 0px 0px #000;',

      }
    },
    fontSize: {
      '16': ['16px', {
        lineHeight: '22px'
      }],
      '20': ['20px', {
        lineHeight: '28px',
        letterSpacing: '-0.8px'
      }],
      '24': ['24px', {
        lineHeight: '32px',
        letterSpacing: '-0.96px'
      }],
      '32': ['32px', {
        lineHeight: '39px',
        letterSpacing: '-1px'
      }],
      '48': ['48px', {
        lineHeight: '57.6px',
        letterSpacing: '-1px'
      }],

    },

    screens: {
      'tablet': '576px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [],
}
