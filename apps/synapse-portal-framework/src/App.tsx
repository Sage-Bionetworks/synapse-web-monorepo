import { PropsWithChildren } from 'react'
import { Outlet } from 'react-router'
import CookiesNotification from 'synapse-react-client/components/CookiesNotification/CookiesNotification'
import { SynapseErrorBoundary } from 'synapse-react-client/components/error/ErrorBanner'
import { SynapseToastContainer } from 'synapse-react-client/components/ToastMessage'
import AppInitializer from './components/AppInitializer'
import { AridhiaIntegration } from './components/AridhiaIntegration'
import Footer from './components/Footer'
import Navbar from './components/navbar/Navbar'
import { usePortalContext } from './components/PortalContext'
import { useDocumentTitleFromRoutes } from './utils/useDocumentTitleFromRoutes'

export type AppProps = PropsWithChildren<{
  /** The default realm ID to use for the application */
  defaultRealmId?: string
  /** If true, redirects unauthenticated users to OneSage login after session initialization */
  requireAuthentication?: boolean
}>

export default function App(props: AppProps) {
  const { defaultRealmId, requireAuthentication } = props
  useDocumentTitleFromRoutes()
  const { aridhiaConfig } = usePortalContext()

  const content = (
    <>
      <SynapseToastContainer />
      <Navbar />
      <CookiesNotification />
      <main className="main">
        {props.children}
        <Outlet />
      </main>
      <Footer />
    </>
  )

  return (
    <SynapseErrorBoundary>
      <AppInitializer
        defaultRealmId={defaultRealmId}
        requireAuthentication={requireAuthentication}
      >
        {aridhiaConfig?.apiBasePath ? (
          <AridhiaIntegration apiBasePath={aridhiaConfig.apiBasePath}>
            {content}
          </AridhiaIntegration>
        ) : (
          content
        )}
      </AppInitializer>
    </SynapseErrorBoundary>
  )
}
