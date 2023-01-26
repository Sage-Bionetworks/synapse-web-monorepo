import { BrowserRouter, Switch } from 'react-router-dom'
import * as React from 'react'
import './App.scss'
import Footer from './Footer'
import AppInitializer from './AppInitializer'
import Navbar from './Navbar'
import CookiesNotification from './CookiesNotification'
import { CookiesProvider } from 'react-cookie'
import { SynapseComponents } from 'synapse-react-client'

const RouteResolver = React.lazy(() => import('./RouteResolver'))
function App() {
  return (
    <>
      <CookiesProvider>
        <BrowserRouter>
          <AppInitializer>
            <SynapseComponents.SynapseToastContainer />
            <Navbar />
            <CookiesNotification />
            <main className="main">
              {/* all the content below */}
              <React.Suspense fallback={<div />}>
                <Switch>
                  <RouteResolver />
                </Switch>
              </React.Suspense>
            </main>
            <Footer />
          </AppInitializer>
        </BrowserRouter>
      </CookiesProvider>
    </>
  )
}

export default App
