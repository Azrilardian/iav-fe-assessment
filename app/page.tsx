'use client'

import { Button } from '@heroui/react'
import { toast } from 'sonner'

import Description from '@/src/components/description'
import Text from '@/src/components/text'
import { showModal } from '@/src/stores/modal-store.actions'

export default function Home() {
  return (
    <>
      <Text tag='h1'>Taxing Laughter: The Joke Tax Chronicles</Text>
      <Text tag='h2'>Taxing Laughter: The Joke Tax Chronicles</Text>
      <Text tag='h3'>Taxing Laughter: The Joke Tax Chronicles</Text>
      <Text tag='p'>Taxing Laughter: The Joke Tax Chronicles</Text>
      <Text tag='small'>Taxing Laughter: The Joke Tax Chronicles</Text>
      <Text tag='p'>Taxing Laughter: The Joke Tax Chronicles</Text>
      <Button
        radius='sm'
        color='primary'
        onPress={() => {
          showModal({
            title: 'Modal Title',
            message: 'Modal Message',
            onConfirm: () => {}
          })
        }}
      >
        Testing Modal
      </Button>
      <Button
        radius='sm'
        color='primary'
        onPress={() => {
          toast.error('Title', {
            description: 'Test description'
          })
        }}
      >
        Testing Toast
      </Button>
      <Description label='Testing Description'>
        This is a description
      </Description>
    </>
  )
}
