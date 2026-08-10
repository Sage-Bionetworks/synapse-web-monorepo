import { lazy, Suspense, useEffect, useState } from 'react'
import { usePortalContext } from '../PortalContext'

const PortalTourContent = lazy(() => import('./PortalTourContent'))

/**
 * Renders the portal's guided tour (from PortalContext's `tourConfig`) and a
 * floating "Take a Tour" button to launch it. Render once inside <App />,
 * above the route Outlet, so the tour survives in-tour navigation.
 *
 * Renders nothing on portals without a tourConfig. The tour engine is
 * client-only, so it is mounted after hydration and loaded lazily to stay out
 * of the SSG render and the initial bundle.
 */
export default function PortalTour() {
  const { tourConfig } = usePortalContext()
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!tourConfig || !isMounted) {
    return null
  }
  return (
    <Suspense fallback={null}>
      <PortalTourContent tourConfig={tourConfig} />
    </Suspense>
  )
}
