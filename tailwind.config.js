const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    fontFamily: {
      display: ['paralucent', 'sans-serif'],
      smallHeader: ['arial', 'sans-serif'],
      sans: ['system-ui', 'sans-serif'],
    },
    fontSize: {
      'xs': '.625rem', // 10px
      'sm': '.8125rem', // 13px
      'tiny': '.875rem', // 14px
      'base': '1rem', // 16px
      'lg': '1.25rem', // 20px
      'xl': '1.875rem', // 30px
      '2xl': '2.375rem', // 38px
      '3xl': '2.8rem', // 45px
      '4xl': '3.75rem', // 60px
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '10px 10px 20px #000000',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {
      colors: {
        dark: 'var(--color-primary-dark)',
        light: 'var(--color-primary-light)',
        med: 'var(--color-primary-med)',
        accent: 'var(--color-accent)',
        grey: 'var(--color-grey)'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'screen-sm': '680px',
        'screen-lg': '1054px'
      },
    },
  },
  variants: {
    extend: {
      flexDirection: ['odd, even'],
    }
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require('@tailwindcss/aspect-ratio'),
    plugin(function({ addBase, theme, addUtilities }) {
      addBase({
        'h1': { 
          fontSize: theme('fontSize.3xl'), 
          lineHeight: theme('lineHeight.none'),
          fontWeight: theme('fontWeight.black'),
        },
        'h2': { 
          fontSize: theme('fontSize.4xl'),
          fontWeight: theme('fontWeight.black'),
          lineHeight: theme('lineHeight.none'),
        },
        'h3': { 
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('lineHeight.tight'),
          fontWeight: theme('fontWeight.black'),
        },
        'h4': { 
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.semibold'),
          letterSpacing: theme('letterSpacing.widest'),
          fontFamily: theme('fontFamily.smallHeader'),
          textTransform: "uppercase",
          color: theme('colors.accent')
        },
        'h5': { 
          fontFamily: theme('fontFamily.smallHeader'),
        },
        'p': {
          lineHeight: theme('lineHeight.normal'),
          color: theme('colors.grey')
        }
      }),
      addUtilities({
        '.section-spacing-lg': {
          'margin-top': '5rem',
          'margin-bottom': '5rem'
        },
        '.section-spacing-sm': {
          'margin-top': '2rem',
          'margin-bottom': '2rem'
        }
      }, ['responsive'])
    })
  ]
}
