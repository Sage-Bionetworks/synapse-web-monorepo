import { PropsWithChildren, Suspense } from 'react'
import { Outlet } from 'react-router'
import CookiesNotification from 'synapse-react-client/components/CookiesNotification/CookiesNotification'
import AppInitializer from './components/AppInitializer'
import Footer from './components/Footer'
import Navbar from './components/navbar/Navbar'
import { useDocumentTitleFromRoutes } from './utils/useDocumentTitleFromRoutes'
import { SynapseErrorBoundary } from 'synapse-react-client/components/error/ErrorBanner'
import { SynapseToastContainer } from 'synapse-react-client/components/ToastMessage'

export default function App(props: PropsWithChildren) {
  useDocumentTitleFromRoutes()

  return (
    <SynapseErrorBoundary>
      <AppInitializer>
        <SynapseToastContainer />
        <Navbar />
        <CookiesNotification />
        <main className="main">
          {props.children}
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </AppInitializer>
    </SynapseErrorBoundary>
  )
}
