import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    // typography: (theme: any) => ({
    //   DEFAULT: {
    //     css: {
    //       body: {
    //         font: '15px Helvetica, arial, freesans, clean, sans-serif',
	  //         wordWrap: 'break-word',
	  //         lineHeight: '1.7',
	  //         padding: '0 20px 20px 20px',
	  //         width: '722px',
	  //         '-webkit-font-smoothing': 'antialiased'
    //       },
    //       'p, blockquote, ul, ol, dl, table, pre': {
    //         margin: '15px 0'
    //       },
    //       'ul, ol': {
    //         paddingLeft: '30px'
    //       },
    //       'h1': {
    //         fontSize: '2.5rem'
    //       },
    //       'h2': {
    //         fontSize: '2.0rem'
    //       },
    //       'h3': {
    //         fontSize: '1.5rem'
    //       },
    //       'h4': {
    //         fontSize: '1.2rem'
    //       },
    //       'h5': {
    //         fontSize: '1.0rem'
    //       },
    //       'h1, h2, h3, h4, h5, h6': {
    //         fontWeight: 'bold',
    //         lineHeight: '1.7',
    //         margin: '1em 0 15px 0',
    //       },
    //       'h1 + p, h2 + p, h3 + p': {
    //         marginTop: '10px'
    //       },
    //       'a': {
    //         color: '#4183c4',
    //         textDecoration: 'none'
    //         },
    //       'a:hover': {
    //         textDecoration: 'underline',
    //       },
    //       'code, pre': {
	  //         borderRadius: '3px',
	  //         border: '1px solid #DDD',
	  //         fontFamily: 'Consolas, "Liberation Mono", Courier, monospace',
	  //         fontSize: '12px',
	  //         margin: '0 2px',
	  //         padding: '0 5px',
	  //         whiteSpace: 'pre'
	  //       },
    //       'pre code': {
    //         border: 'none',
    //         margin: '0',
    //         padding: '0',
    //         whiteSpace: 'pre'
    //         }
    //     },
    //   },
    //   dark: {
    //     css: {
    //       '*': {
    //         color: 'white'
    //       },
    //       blockquote: {
    //         borderLeftColor: theme('colors.neutral.700'),
    //         color: theme('colors.neutral.300'),
    //       },
    //     },
    //   },
    // })
    
  },
  // variants: {
  //   typography: ['dark'],
  // },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  darkMode: 'class'
}
export default config
