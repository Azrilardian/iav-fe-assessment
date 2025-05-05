import { FontWeightType, TextSizeType, VariantType } from './types'

const textSizeClasses: Record<TextSizeType, string> = {
  '5xl': 'text-5xl leading-9 text-color-palette-black',
  '4xl': 'text-4xl leading-9 text-color-palette-black',
  '3xl': 'text-3xl leading-9 text-color-palette-black',
  '2xl': 'text-2xl text-color-palette-black',
  xl: 'text-xl text-color-palette-black',
  lg: 'text-lg text-color-palette-black',
  md: 'text-md leading-6 text-color-palette-black',
  sm: 'text-sm leading-6 text-color-palette-black',
  xs: 'text-xs leading-6 text-color-palette-black'
}

const fontWeightClasses: Record<FontWeightType, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
}

const baseVariants: Record<VariantType, TextSizeType> = {
  title1: '5xl',
  title2: '4xl',
  title3: '3xl',
  title4: '2xl',
  title5: 'xl',
  title6: 'lg',
  body1: 'md',
  body2: 'sm',
  body3: 'xs'
}

const getVariantClass = (size: TextSizeType, weight: FontWeightType) => {
  return `${textSizeClasses[size]} ${fontWeightClasses[weight]}`
}

export const createVariantClass = (
  variant: VariantType,
  weight: FontWeightType
) => {
  const size = baseVariants[variant]

  return getVariantClass(size, weight)
}
