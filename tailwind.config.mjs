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
      }
    }
  },
  plugins: []
}
