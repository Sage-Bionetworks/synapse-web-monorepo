import React from 'react'
import './App.css'
import AppInitializer from './AppInitializer'
import Versions from './Versions'
import { SynapseContextConsumer, SynapseContextType } from 'synapse-react-client/dist/utils/SynapseContext'
import {
  BrowserRouter as Router,
  Route,
  Switch
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
              <Switch>
               <Route exact={true} path="/"
                  render={props => {
                    return <>
                      <p>There are two main entrypoints into this web app</p>
                      <p>
                        <a href="/register">Account Registration</a>&nbsp;and&nbsp;
                        <a href="/validate">Profile Validation</a>
                      </p>
                      </>
                    // return <Redirect to="/register" />
                  }} />
                <Route exact={true} path="/register" render={props => {
                  return <><p>Account registration page goes here</p></>
                }}/>
                {/* profile validation requires that you are already registered and logged in */}
                <Route exact={true} path="/validate"
                  render={props => {
                    return <SynapseContextConsumer>
                      {(ctx?: SynapseContextType) => {
                        if (!ctx?.accessToken) {
                          return <LoginPage returnToUrl={'/validate'} />
                        }
                        return (
                          <>
                            <p>Profile validation page (wizard) goes here</p>
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
