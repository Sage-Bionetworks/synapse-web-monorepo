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
import { RegisterAccount2 } from 'components/RegisterAccount2'
import TermsAndConditions from 'synapse-react-client/dist/containers/TermsAndConditions'

const App: React.FC = () => {
  return (
    <div className="App">
      <>
        <Router>
            <AppInitializer>
              <SynapseComponents.SynapseToastContainer />
              <CookiesNotification />
              <Switch>
               <Route exact path="/"
                  render={props => {
                    return <>
                      <p>There are two main entrypoints into this web app</p>
                      <p>
                        <a href="/register1">Account Registration</a>&nbsp;and&nbsp;
                        <a href="/authenticated/validate">Profile Validation</a>
                      </p>
                      </>
                    // return <Redirect to="/register1" />
                  }} />
                <Route exact path="/register1" component={RegisterAccount1} />
                <Route exact path="/register2" component={RegisterAccount2} />
                {/* check for an access token for any route in the "/authenticated/" path */}
                <Route path="/authenticated/"
                  render={routeProps => {
                    const path = routeProps.location.pathname
                    return <SynapseContextConsumer>
                      {(ctx?: SynapseContextType) => {
                        if (!ctx?.accessToken) {
                          return <LoginPage returnToUrl={path} />
                        }
                        if (path === '/authenticated/validate') {
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
                        } else if (path === '/authenticated/signTermsOfUse') {
                          return (
                            <>
                              <TermsAndConditions onFormChange={(completed:boolean) => { console.log("is the form completed?", completed) }} />
                            </>
                          )
                       } else {
                        return (<>
                          <p>Unrecognized match path {routeProps.match.path}</p>
                        </>)
                       }
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
