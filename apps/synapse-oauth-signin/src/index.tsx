import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { getRoutes } from './routes'

// KaTeX CSS is not included in the SRC style bundle since it includes many large font files.
import 'katex/dist/katex.css'

const container = document.getElementById('rootPanel')
const root = createRoot(container!)
const router = createBrowserRouter(getRoutes())

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
