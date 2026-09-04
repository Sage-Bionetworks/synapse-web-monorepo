import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { MemoryRouter, MemoryRouterProps } from 'react-router'
import { render } from 'vitest-browser-react'
import { defaultMuiThemeOptions } from 'synapse-react-client/theme/DefaultTheme'
import { sageAccountWebThemeOverrides } from '../style/theme'
import '../App.scss'

const theme = createTheme(defaultMuiThemeOptions, sageAccountWebThemeOverrides)

export type RenderInBrowserOptions = {
  memoryRouterProps?: MemoryRouterProps
}

/**
 * Renders `ui` in a real browser with the app's theme, style engine, and
 * stylesheet, which layout assertions need for the SCSS cascade and MUI
 * breakpoints to resolve the way they do in the app.
 */
export function renderInBrowser(
  ui: ReactNode,
  options: RenderInBrowserOptions = {},
) {
  // A fresh QueryClient per render keeps `describe.each` viewport runs from
  // reading another run's cached query data.
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter {...options.memoryRouterProps}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>{ui}</ThemeProvider>
        </StyledEngineProvider>
      </MemoryRouter>
    </QueryClientProvider>,
  )
}
