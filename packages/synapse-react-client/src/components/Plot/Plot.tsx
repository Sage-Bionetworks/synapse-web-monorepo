import { PlotParams } from 'react-plotly.js'
import createPlotlyComponent from './safe-react-plotly-factory'
import { lazy, Suspense } from 'react'

// Lazy-load plotly.js since it is very large!
const LazyLoadedPlot = lazy(async () => {
  const Plotly = await import('plotly.js-basic-dist')

  // Polyfill for Plotly.purge - not needed in plotly.js 2.x
  // react-plotly.js calls Plotly.purge() in componentWillUnmount, but plotly.js 2.x removed this method
  // Modern plotly.js handles cleanup automatically, so we provide a no-op polyfill
  if (!Plotly.default.purge) {
    Plotly.default.purge = () => {
      // No-op: modern plotly.js handles cleanup automatically
    }
  }

  return { default: createPlotlyComponent(Plotly) }
})

/**
 * Wrapper around react-plotly.js, lazy loads the plotly.js library.
 * @param props
 * @constructor
 */
export function Plot(props: PlotParams) {
  return (
    <Suspense>
      <LazyLoadedPlot {...props} />
    </Suspense>
  )
}

export default Plot
