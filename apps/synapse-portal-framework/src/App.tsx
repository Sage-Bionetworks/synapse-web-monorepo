import { PropsWithChildren } from 'react'
import { Outlet } from 'react-router'
import CookiesNotification from 'synapse-react-client/components/CookiesNotification/CookiesNotification'
import { SynapseErrorBoundary } from 'synapse-react-client/components/error/ErrorBanner'
import { SynapseToastContainer } from 'synapse-react-client/components/ToastMessage'
import AppInitializer from './components/AppInitializer'
import Footer from './components/Footer'
import Navbar from './components/navbar/Navbar'
import { useDocumentTitleFromRoutes } from './utils/useDocumentTitleFromRoutes'

export type AppProps = PropsWithChildren<{
  /** If true, redirects unauthenticated users to OneSage login after session initialization */
  requireAuthentication?: boolean
}>

export default function App(props: AppProps) {
  const { requireAuthentication } = props
  useDocumentTitleFromRoutes()

  return (
    <SynapseErrorBoundary>
      <AppInitializer requireAuthentication={requireAuthentication}>
        <SynapseToastContainer />
        <Navbar />
        <CookiesNotification />
        <main className="main">
          {props.children}
          <Outlet />
        </main>
        <Footer />
      </AppInitializer>
    </SynapseErrorBoundary>
  )
}
