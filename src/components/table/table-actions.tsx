import React, { useState } from 'react'

import { ConfirmationModal } from 'components'
import { useTranslation } from 'react-i18next'

import { TableActionButton } from './table-action'
import { TableActionsProps } from './table.types'

export const TableActionsHeader = () => {
  const { t } = useTranslation()

  return <div className='text-center'>{t('Actions')}</div>
}

export const TableActions = (props: TableActionsProps) => {
  const { t } = useTranslation()

  const {
    id,
    path,
    actions = ['view', 'edit', 'delete'],
    customActions = [],
    deleteConfirmationTitle = t('Delete Item'),
    deleteConfirmationBody = t('Are you sure want to delete this item?'),
    onDelete
  } = props

  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false)

  const onConfirmDelete = async () => {
    try {
      if (onDelete) await onDelete(id)
    } finally {
      setDeleteConfirmVisible(false)
    }
  }

  return (
    <>
      <div className='text-center'>
        {customActions.map((action, index) => (
          <TableActionButton {...action} key={index} />
        ))}

        <TableActionButton
          to={`${path}/${id}`}
          label={t('View')}
          icon='mdi-eye-circle'
          variant='primary'
          visible={actions.includes('view')}
        />
        <TableActionButton
          to={`${path}/edit/${id}`}
          label={t('Edit')}
          icon='mdi-circle-edit-outline'
          variant='info'
          visible={actions.includes('edit')}
        />
        <TableActionButton
          label={t('Delete')}
          icon='mdi-delete-circle'
          variant='danger'
          onClick={() => setDeleteConfirmVisible(true)}
          visible={actions.includes('delete')}
        />
      </div>

      <ConfirmationModal
        visible={deleteConfirmVisible}
        onConfirm={onConfirmDelete}
        onCancel={() => setDeleteConfirmVisible(false)}
        title={deleteConfirmationTitle}
        body={deleteConfirmationBody}
        variant='danger'
        testId='delete-confirmation-modal'
      />
    </>
  )
}
