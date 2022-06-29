import React, { useState } from 'react';
import './App.css';
import { OAuth2Form } from './OAuth2Form';
import AppInitializer from './AppInitializer'
import Versions from './Versions'
import { getURLParam } from './URLUtils'
import { SynapseContextConsumer, SynapseContextType } from 'synapse-react-client/dist/utils/SynapseContext';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { signOut, setAccessTokenCookie } from 'synapse-react-client/dist/utils/SynapseClient';

const App: React.FC = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false)
  return (
    <div className="App">
      <Router>
        <AppInitializer>
          <Switch>
            <Route exact path="/" render={() => {
              return <SynapseContextConsumer>
                {(ctx?: SynapseContextType) => {
                  return <OAuth2Form context={ctx}/>
                }}
              </SynapseContextConsumer>
               }}/>
            <Route exact path="/logout" render={() => {
              signOut(()=>{setIsLoggedOut(true)})
              return <p style={{margin: 10}}> {isLoggedOut ? 'Logged' : 'Logging'} out</p>
            }}/>
            <Route exact path="/login" render={() => {
              // look for the code from the params
              const code = getURLParam('code')
              setAccessTokenCookie(code, ()=>{setIsLoggedOut(false)})
              return <p style={{margin: 10}}> {isLoggedOut ? 'Logging' : 'Logged'} in</p>
            }}/>
          </Switch>
        </AppInitializer>
        <Versions />
      </Router>
    </div>
  );
}
export default App;
