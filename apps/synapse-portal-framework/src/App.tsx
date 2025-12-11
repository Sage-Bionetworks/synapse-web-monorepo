import { PropsWithChildren } from 'react'
import { Outlet } from 'react-router'
import CookiesNotification from 'synapse-react-client/components/CookiesNotification/CookiesNotification'
import { SynapseErrorBoundary } from 'synapse-react-client/components/error/ErrorBanner'
import { SynapseToastContainer } from 'synapse-react-client/components/ToastMessage'
import { SynapseChatFloatingActionButton } from 'synapse-react-client'
import AppInitializer from './components/AppInitializer'
import Footer from './components/Footer'
import Navbar from './components/navbar/Navbar'
import { usePortalContext } from './components/PortalContext'
import { useDocumentTitleFromRoutes } from './utils/useDocumentTitleFromRoutes'

export default function App(props: PropsWithChildren) {
  useDocumentTitleFromRoutes()
  const { synapseChatProps } = usePortalContext()

  return (
    <SynapseErrorBoundary>
      <AppInitializer>
        <SynapseToastContainer />
        <Navbar />
        <CookiesNotification />
        <main className="main">
          {props.children}
          <Outlet />
        </main>
        <Footer />
        {synapseChatProps && (
          <SynapseChatFloatingActionButton {...synapseChatProps} />
        )}
      </AppInitializer>
    </SynapseErrorBoundary>
  )
}
