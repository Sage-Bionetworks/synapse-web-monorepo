import { page } from 'vitest/browser'

export type Viewport = {
  name: string
  width: number
  height: number
}

// TODO: Standardize supported viewports with the design team. For now, these are designed around MUI's `md` breakpoint (900px) and iPhone 12/13/14 portrait orientation (390px).

export const MOBILE_VIEWPORT: Viewport = {
  name: 'mobile',
  width: 390,
  height: 844,
}

export const DESKTOP_VIEWPORT: Viewport = {
  name: 'desktop',
  width: 1440,
  height: 900,
}

/**
 * Viewports that every layout invariant must hold at. Use with `describe.each`
 * for assertions that are true at any width; assert width-specific layout in a
 * viewport-specific block instead of branching inside a shared test.
 */
export const VIEWPORTS: Viewport[] = [MOBILE_VIEWPORT, DESKTOP_VIEWPORT]

/**
 * Resizes the test iframe. Call before rendering so the breakpoint-dependent
 * `sx` props and SCSS media queries apply to the first paint.
 */
export function setViewport(viewport: Viewport) {
  return page.viewport(viewport.width, viewport.height)
}
