'use client'

import { useTranslation } from 'react-i18next'

import Button from '@/src/components/button'
import Text from '@/src/components/text'

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t } = useTranslation('common')

  return (
    <html>
      <body>
        <div className='flex h-screen flex-col items-center justify-center gap-2'>
          <Text variant='title2' tag='h1' weight='bold'>
            {t('something_went_wrong')}
          </Text>
          <Text variant='body2' tag='p' className='mb-2'>
            {error.message}
          </Text>
          <Button onPress={reset} label={t('try_again')} />
        </div>
      </body>
    </html>
  )
}
