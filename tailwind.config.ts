import { heroui } from '@heroui/react'
import type { Config } from 'tailwindcss'

import { colors } from './src/theme/color'
import { fontSize } from './src/theme/fonts'
import { palette } from './src/theme/palette'
import { borderRadius } from './src/theme/radius'
import { screens } from './src/theme/screen'
import { spacing } from './src/theme/space'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Inter', 'serif']
    },
    extend: {
      colors: {
        ...colors
      },
      spacing: {
        ...spacing
      },
      borderRadius: {
        ...borderRadius
      },
      fontSize: {
        ...fontSize
      }
    },
    screens: {
      ...screens
    }
  },
  plugins: [
    heroui({
      layout: {
        disabledOpacity: '0.3',
        radius: {
          small: '4px',
          medium: '8px',
          large: '12px'
        }
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: palette.black,
              foreground: palette.white
            },
            secondary: {
              DEFAULT: palette.greyExtraLight,
              foreground: palette.black
            },
            danger: {
              DEFAULT: palette.red
            }
          }
        }
      }
    })
  ],
  darkMode: 'class'
} satisfies Config
