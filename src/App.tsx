import React, { useState } from 'react';
import './App.css';
import OAuth2Form from './OAuth2Form';
import AppInitializer from './AppInitializer'
import Versions from './Versions'
import { SynapseContextConsumer, SynapseContextType } from 'synapse-react-client/dist/utils/SynapseContext';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { signOut } from 'synapse-react-client/dist/utils/SynapseClient';

const App: React.FC = () => {
  const [isLoggedOut, setIsLoggingOut] = useState(false)
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
              signOut(()=>{setIsLoggingOut(true)})
              return <p style={{margin: 10}}> {isLoggedOut ? 'Logged' : 'Logging'} out</p>
            }}/>
          </Switch>
        </AppInitializer>
        <Versions />
      </Router>
    </div>
  );
}
export default App;
