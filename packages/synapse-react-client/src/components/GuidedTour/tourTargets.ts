/**
 * Names of the `data-tour` targets exposed by synapse-react-client
 * components for guided tours. Reference them in tour configs via
 * `tourSelector(<name>)`.
 */

/** Command bar above Explore results: within-results search, show/hide filters and charts, download controls (TopLevelControls) */
export const TOUR_TARGET_EXPLORE_TOP_CONTROLS = 'explore-top-controls'

/** The facet filter checkboxes alongside Explore results (FacetFilterControls) */
export const TOUR_TARGET_EXPLORE_FACET_FILTERS = 'explore-facet-filters'

/** The interactive facet charts above Explore results (PlotsContainer) */
export const TOUR_TARGET_EXPLORE_CHARTS = 'explore-charts'

/** The Explore results themselves — table rows or cards (RowSetView) */
export const TOUR_TARGET_EXPLORE_RESULTS = 'explore-results'
