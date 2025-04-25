import { useEffect } from 'react'
import { useLocation } from 'react-router'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    console.log('Calling scrollTo(0,0)')
    window.scrollTo(0, 0)
  }, [pathname]) // Runs whenever the pathname changes
  return null // This component doesn't render anything
}

export default ScrollToTop
