import { ComponentProps } from 'react'

import { ControlledButtonProps } from '../button/types'

export type ButtonGroupProps = ComponentProps<'div'> & {
  buttons: [ControlledButtonProps, ControlledButtonProps]
}
