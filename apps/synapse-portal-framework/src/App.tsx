import { PropsWithChildren } from 'react'
import { Outlet } from 'react-router'
import {
  CookiesNotification,
  SynapseErrorBoundary,
  SynapseToastContainer,
} from 'synapse-react-client'
import AppInitializer from './components/AppInitializer'
import Footer from './components/Footer'
import Navbar from './components/navbar/Navbar'
import { useDocumentTitleFromRoutes } from './utils/useDocumentTitleFromRoutes'

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
          <Outlet />
        </main>
        <Footer />
      </AppInitializer>
    </SynapseErrorBoundary>
  )
}
