/**
 * Names of the `data-tour` targets that framework components expose for
 * guided tours. Portal tour configs reference these via
 * `tourSelector(<name>)` from synapse-react-client.
 */

/** The search box in the sticky navbar (HeaderSearchBox) */
export const TOUR_TARGET_PORTAL_SEARCH = 'portal-search'

/** The tab strip at the top of the Explore pages (ExploreWrapper) */
export const TOUR_TARGET_EXPLORE_TABS = 'explore-tabs'

/** The Explore page content area: facets, plots, and results table */
export const TOUR_TARGET_EXPLORE_CONTENT = 'explore-content'

/** Target name of a top-level navbar item, keyed by its NavbarConfig route name */
export function navTourId(routeName: string): string {
  return `nav-${routeName}`
}
