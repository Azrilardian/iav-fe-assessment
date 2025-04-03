import { FontWeightType, TextSizeType, VariantType } from './types'

const getVariantClass = (size: TextSizeType, weight: FontWeightType) => {
  return `text-${size} font-${weight}`
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

export const createVariantClass = (
  variant: VariantType,
  weight: FontWeightType
) => {
  const size = baseVariants[variant]

  return getVariantClass(size, weight)
}
