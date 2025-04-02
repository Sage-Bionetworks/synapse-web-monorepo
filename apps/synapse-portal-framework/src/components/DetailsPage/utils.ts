import { scrollToWithOffset } from '@/utils'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

export function useScrollOnMount() {
  const scrolledRef = useRef(false)
  const { hash } = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hash) {
        const id = decodeURIComponent(hash.replace('#', ''))
        const element = document.getElementById(id)
        if (element) {
          scrollToWithOffset(element)
          scrolledRef.current = true
        }
      }
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
    // Empty dependency array to intentionally run only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
