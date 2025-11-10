import { PropsWithChildren } from 'react'
import { Outlet } from 'react-router'
import CookiesNotification from 'synapse-react-client/components/CookiesNotification/CookiesNotification'
import { SynapseErrorBoundary } from 'synapse-react-client/components/error/ErrorBanner'
import { CrispChat } from 'synapse-react-client/components/CrispChat/CrispChat'
import { SynapseToastContainer } from 'synapse-react-client/components/ToastMessage'
import AppInitializer from './components/AppInitializer'
import { CPathIntegration } from './components/CPathIntegration'
import Footer from './components/Footer'
import Navbar from './components/navbar/Navbar'
import { usePortalContext } from './components/PortalContext'
import { useDocumentTitleFromRoutes } from './utils/useDocumentTitleFromRoutes'

export default function App(props: PropsWithChildren) {
  useDocumentTitleFromRoutes()
  const { cpathConfig } = usePortalContext()

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
      <CrispChat />
    </>
  )

  return (
    <SynapseErrorBoundary>
      <AppInitializer>
        {cpathConfig?.enabled ? (
          <CPathIntegration
            workspacesApiBasePath={cpathConfig.workspacesApiBasePath}
          >
            {content}
          </CPathIntegration>
        ) : (
          content
        )}
      </AppInitializer>
    </SynapseErrorBoundary>
  )
}
