import { PlotParams } from 'react-plotly.js'
import createPlotlyComponent from './safe-react-plotly-factory'
import { lazy, Suspense } from 'react'

// Lazy-load plotly.js since it is very large!
export const safeESModule = <T,>(a: T | { default: T }): T => {
  const b = a as any
  return b.__esModule || b[Symbol.toStringTag] === 'Module' ? b.default : b
}

// Lazy-load plotly.js-basic-dist (scatter, bar, pie, scattergl traces).
const LazyLoadedPlot = lazy(async () => {
  const Plotly = await import('plotly.js-basic-dist')
  const plotly = safeESModule(Plotly)
  return { default: createPlotlyComponent(plotly) }
})

/**
 * Wrapper around react-plotly.js, lazy loads plotly.js-basic-dist.
 * Use this for standard chart types (bar, scatter, pie).
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

// Lazy-load the full plotly.js bundle which includes all trace types (e.g. Sankey).
const LazyLoadedFullBundlePlot = lazy(async () => {
  const Plotly = await import('plotly.js')
  const plotly = safeESModule(Plotly)
  return { default: createPlotlyComponent(plotly) }
})

/**
 * Wrapper around react-plotly.js, lazy loads the full plotly.js bundle.
 * Use this for trace types not available in plotly.js-basic-dist, such as Sankey.
 * @param props
 * @constructor
 */
export function PlotFullBundle(props: PlotParams) {
  return (
    <Suspense>
      <LazyLoadedFullBundlePlot {...props} />
    </Suspense>
  )
}

export default Plot
