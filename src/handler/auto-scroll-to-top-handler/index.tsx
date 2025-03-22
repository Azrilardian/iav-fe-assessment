'use client'

import { useEffect } from 'react'

import { usePathname } from 'next/navigation'

const AutoScrollToTopHandler = (): null => {
  const pathname = usePathname()

  const scrollToTop = () => window.scrollTo(0, 0)

  useEffect(() => {
    setTimeout(() => {
      scrollToTop()
    }, 100)
  }, [pathname])

  useEffect(() => {
    window.addEventListener('beforeunload', scrollToTop)

    return () => {
      window.removeEventListener('beforeunload', scrollToTop)
    }
  }, [])

  return null
}

export default AutoScrollToTopHandler
