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
import LoginPage from './LoginPage'
import { RegisterAccount1 } from 'components/RegisterAccount1'
import { SynapseComponents } from 'synapse-react-client'

const App: React.FC = () => {
  return (
    <div className="App">
      <>
        <Router>
            <AppInitializer>
              <SynapseComponents.SynapseToastContainer />
              <CookiesNotification />
              <Switch>
               <Route exact={true} path="/"
                  render={props => {
                    return <>
                      <p>There are two main entrypoints into this web app</p>
                      <p>
                        <a href="/register1">Account Registration</a>&nbsp;and&nbsp;
                        <a href="/validate">Profile Validation</a>
                      </p>
                      </>
                    // return <Redirect to="/register1" />
                  }} />
                <Route exact={true} path="/register1" render={props => {
                  return <RegisterAccount1 />
                }}/>
                <Route exact={true} path="/register2" render={props => {
                  return <><p>Account registration step 2 page goes here. </p>
                  <p>Ask for username, first name, last name, and password! </p>
                    <p>Also get emailValidationSignedToken from URL search params.</p>
                    <p>See http://rest-docs.synapse.org/rest/POST/account2.html</p>
                    </>

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
