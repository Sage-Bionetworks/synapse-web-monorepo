import { TourOutlined } from '@mui/icons-material'
import { Fab, useMediaQuery, useTheme } from '@mui/material'
import { useCookieValue } from '@react-hookz/web/useCookieValue/index.js'
import { useCallback, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router'
import {
  getGuidedTourStorageKey,
  GuidedTourConfig,
  useGuidedTour,
  useTourCompletionState,
} from 'synapse-react-client/components/GuidedTour/index'
import {
  COOKIES_AGREEMENT_COOKIE_KEY,
  useCookiePreferences,
} from 'synapse-react-client/utils/hooks/useCookiePreferences'
import { usePortalContext } from '../PortalContext'

/** Lets SSG hydration finish and loader-prefetched content paint before spotlighting it */
const AUTO_START_DELAY_MS = 1_000

export type PortalTourContentProps = {
  tourConfig: GuidedTourConfig
}

export default function PortalTourContent(props: PortalTourContentProps) {
  const { tourConfig } = props
  const { portalKey } = usePortalContext()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [cookiePreferences] = useCookiePreferences()
  // The FAB is hidden until the user answers the cookie consent banner: the
  // banner is a full-width Snackbar along the bottom of the page that covers
  // the FAB and intercepts its clicks.
  const [rawConsentCookie] = useCookieValue(COOKIES_AGREEMENT_COOKIE_KEY)
  const hasMadeCookieDecision = rawConsentCookie != null
  const theme = useTheme()
  const isDesktopView = useMediaQuery(theme.breakpoints.up('lg'))

  const storageKey = getGuidedTourStorageKey(
    portalKey,
    tourConfig.id,
    tourConfig.version,
  )
  const [completionState, persistCompletionState] =
    useTourCompletionState(storageKey)

  const handleNavigate = useCallback(
    (destinationPathname: string) => {
      void navigate(destinationPathname)
    },
    [navigate],
  )

  const { startTour, isRunning, tourNode } = useGuidedTour({
    tour: tourConfig,
    currentPathname: pathname,
    onNavigate: handleNavigate,
    onTourEnd: persistCompletionState,
  })

  // Auto-start once for users who haven't seen the tour, only with functional
  // cookie consent (without it the dismissal can't be remembered, and
  // re-spotlighting every visit is hostile — the FAB stays available), only
  // on the home page where the tour begins, and only on desktop (the tour
  // targets navbar elements that are collapsed into the mobile menu).
  const hasAutoStartedRef = useRef(false)
  useEffect(() => {
    const shouldAutoStart =
      !hasAutoStartedRef.current &&
      tourConfig.autoStart !== false &&
      cookiePreferences.functionalAllowed &&
      completionState === null &&
      pathname === '/' &&
      isDesktopView
    if (!shouldAutoStart) {
      return
    }
    // The ref is set when the timer fires, not when it's scheduled: strict
    // mode's synchronous effect cleanup would otherwise clear the timeout
    // with the ref already set, and the tour would never start.
    const timeoutId = setTimeout(() => {
      hasAutoStartedRef.current = true
      startTour()
    }, AUTO_START_DELAY_MS)
    return () => clearTimeout(timeoutId)
  }, [
    tourConfig.autoStart,
    cookiePreferences.functionalAllowed,
    completionState,
    pathname,
    isDesktopView,
    startTour,
  ])

  return (
    <>
      {!isRunning && hasMadeCookieDecision && (
        <Fab
          variant="extended"
          size="small"
          color="primary"
          onClick={startTour}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            // below MUI modals (1300) so dialogs cover it
            zIndex: 1200,
          }}
        >
          <TourOutlined fontSize="small" sx={{ mr: 1 }} />
          Take a Tour
        </Fab>
      )}
      {tourNode}
    </>
  )
}
