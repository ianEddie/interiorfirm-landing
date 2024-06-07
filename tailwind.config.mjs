/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        main: '#FFD476',
        primary: '#28887A'
      },
      fontFamily: {
        title: ['Stardom-Regular'],
        main: ['Chillax-Variable'],
        text: ['Author-Variable']
      },
      boxShadow: {
        custom: '3px 5px 5px 0px rgb(217, 119, 6, 0.5)',
        'custom-hover': '3px 5px 5px 0px rgb(87, 83, 78, 0.5)'
      }
    }
  },
  plugins: []
}
