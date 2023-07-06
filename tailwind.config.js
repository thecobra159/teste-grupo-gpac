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
      colors: {
        'gpac-red': '#ED1F34',
        'gpac-black': '#222222',
      },
    },
    screens: {
      sd: '640px',
      hd: '1280px',
      fhd: '1920px',
      '2k': '2560px',
      '4k': '3840px',
      '8k': '7680px',
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  config: {
    variants: {
      extend: {
        transform: ['group-hover', 'hover'],
      },
    },
  },
}
