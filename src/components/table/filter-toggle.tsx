import React, { useContext } from 'react'

import { AccordionContext, Button, useAccordionButton } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

type FilterToggleProps = {
  eventKey: string
  activeFilter: number
}

export const FilterToggle = ({
  eventKey,
  activeFilter = 0
}: FilterToggleProps) => {
  const { t } = useTranslation()
  const { activeEventKey } = useContext(AccordionContext)

  const decoratedOnClick = useAccordionButton(eventKey)

  const isActive = activeEventKey === eventKey

  return (
    <Button
      variant='outline-light fs-5 fw-bold d-flex align-items-center order-2 order-sm-1'
      onClick={decoratedOnClick}
    >
      {t('Filter', { count: activeFilter })}
      <i className={`mdi mdi-chevron-${isActive ? 'up' : 'down'} ms-1`}></i>
    </Button>
  )
}
