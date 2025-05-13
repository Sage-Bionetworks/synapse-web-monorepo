import _createPlotlyComponent from 'react-plotly.js/factory'

// We want to bundle browser-compatible code, but use ESM (`"type": "module"` in package.json) when we use Node (e.g. tests).
// esbuild (used by Vite in development mode) has a quirk where this will cause packages react-plotly.js/factory to be
// imported in 'node mode', which breaks imports in the browser.
// For further explanation and source of workaround, see: https://github.com/evanw/esbuild/issues/2480#issuecomment-1970337003

const safeESModule = <T>(a: T | { default: T }): T => {
  const b = a as any
  return b.__esModule || b[Symbol.toStringTag] === 'Module' ? b.default : b
}

const createPlotlyComponent = safeESModule(_createPlotlyComponent)

export default createPlotlyComponent
