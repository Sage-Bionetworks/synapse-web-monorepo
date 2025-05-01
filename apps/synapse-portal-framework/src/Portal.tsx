import { createTheme, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useMemo } from 'react'
import { CookiesProvider } from 'react-cookie'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { defaultQueryClientConfig } from 'synapse-react-client/utils/context/FullContextProvider'
import { mergeTheme } from 'synapse-react-client/theme/mergeTheme'
import { PortalContextProvider } from './components/PortalContext'
import { PortalProps } from './components/PortalProps'

const queryClient = new QueryClient(defaultQueryClientConfig)

function Portal(props: PortalProps) {
  const { palette, ...context } = props
  const router = createBrowserRouter(props.routeConfig)
  const theme = useMemo(() => createTheme(mergeTheme({ palette })), [palette])

  return (
    <PortalContextProvider value={context}>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      </CookiesProvider>
    </PortalContextProvider>
  )
}

export default Portal
