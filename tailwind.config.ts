import type { Config } from 'tailwindcss'

import { colors } from './src/theme/color'
import { fontSize } from './src/theme/fonts'
import { borderRadius } from './src/theme/radius'
import { screens } from './src/theme/screen'
import { spacing } from './src/theme/space'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
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
  darkMode: 'class'
} satisfies Config
