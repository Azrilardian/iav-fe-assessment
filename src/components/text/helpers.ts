import { FontWeightType, TextSizeType, VariantType } from './types'

const textSizeClasses: Record<TextSizeType, string> = {
  '5xl': 'text-5xl',
  '4xl': 'text-4xl',
  '3xl': 'text-3xl',
  '2xl': 'text-2xl',
  xl: 'text-xl',
  lg: 'text-lg',
  md: 'text-md',
  sm: 'text-sm',
  xs: 'text-xs'
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
