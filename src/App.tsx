import React from 'react'
import './App.css'
import AppInitializer from './AppInitializer'
import Versions from './Versions'
import { SynapseContextConsumer, SynapseContextType } from 'synapse-react-client/dist/utils/SynapseContext'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import CookiesNotification from 'components/CookiesNotification'
import { signOut } from 'synapse-react-client/dist/utils/SynapseClient'
import OnRouteChange from 'components/OnRouteChange'
import LoginPage from './LoginPage'

const App: React.FC = () => {
  return (
    <div className="App">
      <>
        <Router>
            <OnRouteChange />
            <AppInitializer>
              <CookiesNotification />
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route exact={true} path="/"
                  // TODO: instead of calling render, set component (to the component that should handle the default page)
                  render={props => {
                    return <SynapseContextConsumer>
                      {(ctx?: SynapseContextType) => {
                        if (!ctx?.accessToken) {
                          return <LoginPage returnToUrl={'afterlogin'} />
                        }
                        return (
                          <>
                            <p>Default page</p>
                            {ctx?.accessToken && 
                              <div>
                                <p>You are logged in!</p>
                                <button onClick={() => {signOut(()=>{window.location.reload()})}}>Sign out</button>
                              </div>}
                          </>
                        )
                      }}
                    </SynapseContextConsumer>
                  }} />
                <Route exact={true} path="/login" render={props => {
                  return <LoginPage returnToUrl={'/'} />
                }}/>
              </Switch>
            </AppInitializer>
          </Router>
        
        </>
      <Versions />
    </div>
  );
}
export default App;
