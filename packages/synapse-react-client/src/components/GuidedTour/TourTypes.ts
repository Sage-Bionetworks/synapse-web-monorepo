import { ReactNode } from 'react'

/**
 * Attribute used to tag DOM elements as guided tour step targets. Prefer
 * tagging elements with this attribute over targeting them with structural
 * CSS selectors, which break silently when markup changes.
 */
export const TOUR_DATA_ATTRIBUTE = 'data-tour'

/** Builds a CSS selector matching an element tagged with `data-tour="<name>"` */
export function tourSelector(name: string): string {
  return `[${TOUR_DATA_ATTRIBUTE}="${name}"]`
}

export type GuidedTourStepPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'right'
  | 'auto'
  | 'center'

export type GuidedTourStep = {
  /**
   * CSS selector for the element this step highlights, e.g.
   * `tourSelector('portal-search')`. Use `'body'` with placement `'center'`
   * for a modal-style step with no highlighted element.
   */
  target: string
  title?: ReactNode
  content: ReactNode
  /** @default 'bottom' */
  placement?: GuidedTourStepPlacement
  /**
   * The route this step's target lives on. When it differs from the current
   * pathname at the time the step is shown, the tour navigates there and
   * waits for the target to appear before continuing. Omit for steps on the
   * page where the tour started.
   */
  pathname?: string
  /** Padding in pixels around the spotlight cutout */
  spotlightPadding?: number
}

export type GuidedTourConfig = {
  /** Stable identifier for this tour, used in the persistence key */
  id: string
  /**
   * Version of this tour's content. Bump to show the tour again to users who
   * completed or dismissed an older version.
   */
  version: number
  steps: GuidedTourStep[]
  /**
   * Whether the tour should start automatically for users who have not seen
   * it (hosts decide how to honor this, e.g. only with functional cookie
   * consent).
   * @default true
   */
  autoStart?: boolean
}

/** How a tour run ended: the user viewed the last step, or exited early. */
export type TourEndResult = 'completed' | 'dismissed'
