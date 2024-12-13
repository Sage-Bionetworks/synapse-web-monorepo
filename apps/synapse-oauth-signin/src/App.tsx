import { ThemeProvider } from '@mui/material'
import { createTheme, StyledEngineProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
import './App.scss'
import { SynapseErrorBoundary } from 'synapse-react-client/components/error/index'
import AppInitializer from './AppInitializer'
import generalTheme from './style/theme'
import Versions from './Versions'
import { defaultQueryClientConfig } from 'synapse-react-client/utils/context/FullContextProvider'
import { mergeTheme } from 'synapse-react-client/theme/mergeTheme'

const defaultQueryClient = new QueryClient(defaultQueryClientConfig)
const theme = createTheme(mergeTheme(generalTheme))

export type AppProps = {
  // Override the query client used in the app (useful for testing)
  queryClient?: QueryClient
}

function App(props: AppProps) {
  const { queryClient = defaultQueryClient } = props

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <AppInitializer>
              <SynapseErrorBoundary>
                <Outlet />
              </SynapseErrorBoundary>
            </AppInitializer>
            <Versions />
          </ThemeProvider>
        </QueryClientProvider>
      </StyledEngineProvider>
    </div>
  )
}
export default App
