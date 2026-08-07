import { useTheme } from '@mui/material'
import { ReactNode, useCallback, useMemo, useRef } from 'react'
import { EVENTS, EventHandler, STATUS, Step, useJoyride } from 'react-joyride'
import GuidedTourTooltip from './GuidedTourTooltip'
import { GuidedTourConfig, TourEndResult } from './TourTypes'
import { WAIT_FOR_ELEMENT_TIMEOUT_MS, waitForElement } from './waitForElement'

/** Above MUI's tooltip z-index (1500) so tour UI clears popovers and sticky navbars */
export const TOUR_Z_INDEX = 1600

/** Keeps room below a sticky portal navbar when scrolling a target into view */
const TOUR_SCROLL_OFFSET_PX = 120

/**
 * Joyride caps `before` hooks at this duration; it must exceed the
 * WAIT_FOR_ELEMENT_TIMEOUT_MS spent waiting for a target after navigation.
 */
const BEFORE_HOOK_TIMEOUT_MS = WAIT_FOR_ELEMENT_TIMEOUT_MS + 2_000

export type UseGuidedTourOptions = {
  tour: GuidedTourConfig
  /**
   * The current route's pathname. Required (along with onNavigate) for tours
   * whose steps set `pathname`.
   */
  currentPathname?: string
  /** Called when a step lives on a different route, e.g. react-router's navigate() */
  onNavigate?: (pathname: string) => void
  /** Called once when a run ends, with how it ended */
  onTourEnd?: (result: TourEndResult) => void
}

export type UseGuidedTourReturn = {
  /** Starts (or restarts) the tour from the first step */
  startTour: () => void
  isRunning: boolean
  /** Render this node once wherever the hook is used */
  tourNode: ReactNode
}

/**
 * Runs a guided tour described by a {@link GuidedTourConfig}. Steps may span
 * multiple routes: when a step's `pathname` differs from `currentPathname`,
 * the tour calls `onNavigate` and waits for the step's target to mount before
 * showing it. A step whose target never appears is skipped rather than
 * blocking the tour.
 */
export function useGuidedTour(
  options: UseGuidedTourOptions,
): UseGuidedTourReturn {
  const { tour, currentPathname, onNavigate, onTourEnd } = options
  const theme = useTheme()

  // Refs so the memoized steps' before-hooks and the event handler always see
  // the latest values without re-instantiating the tour mid-run.
  const currentPathnameRef = useRef(currentPathname)
  currentPathnameRef.current = currentPathname
  const onNavigateRef = useRef(onNavigate)
  onNavigateRef.current = onNavigate
  const onTourEndRef = useRef(onTourEnd)
  onTourEndRef.current = onTourEnd

  const steps: Step[] = useMemo(
    () =>
      // Undefined optional fields must be omitted, not passed explicitly —
      // joyride's option merging treats a present-but-undefined key as an
      // override of the built-in default.
      tour.steps.map(step => ({
        target: step.target,
        content: step.content,
        ...(step.title !== undefined && { title: step.title }),
        ...(step.placement !== undefined && { placement: step.placement }),
        ...(step.spotlightPadding !== undefined && {
          spotlightPadding: step.spotlightPadding,
        }),
        before: async () => {
          if (
            step.pathname &&
            step.pathname !== currentPathnameRef.current &&
            onNavigateRef.current
          ) {
            onNavigateRef.current(step.pathname)
          }
          await waitForElement(step.target)
        },
      })),
    [tour],
  )

  const handleEvent: EventHandler = useCallback(data => {
    if (data.type === EVENTS.TOUR_END) {
      onTourEndRef.current?.(
        data.status === STATUS.FINISHED ? 'completed' : 'dismissed',
      )
    }
  }, [])

  const { controls, state, Tour } = useJoyride({
    steps,
    continuous: true,
    onEvent: handleEvent,
    tooltipComponent: GuidedTourTooltip,
    // Joyride puts these in the buttons' aria-labels; they must match the
    // visible labels rendered by GuidedTourTooltip so the accessible name is
    // the text users see.
    locale: {
      back: 'Back',
      close: 'Close tour',
      last: 'Finish',
      next: 'Next',
      skip: 'Skip tour',
    },
    options: {
      skipBeacon: true,
      // The close (X) button and the Skip button both end the tour; joyride's
      // default close action advances to the next step instead, which reads
      // as a broken dismissal. Esc and overlay clicks share that advancing
      // behavior, so they are disabled — dismissal goes through the buttons.
      closeButtonAction: 'skip',
      overlayClickAction: false,
      dismissKeyAction: false,
      beforeTimeout: BEFORE_HOOK_TIMEOUT_MS,
      scrollOffset: TOUR_SCROLL_OFFSET_PX,
      primaryColor: theme.palette.primary.main,
      zIndex: TOUR_Z_INDEX,
    },
  })

  const startTour = useCallback(() => {
    controls.start(0)
  }, [controls])

  return {
    startTour,
    isRunning: state.status === STATUS.RUNNING,
    tourNode: Tour,
  }
}
