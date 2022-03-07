import React from 'react';
import './App.css';
import AppInitializer from './AppInitializer'
import Versions from './Versions'
import { SynapseContextConsumer, SynapseContextType } from 'synapse-react-client/dist/utils/SynapseContext';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppInitializer>
        <SynapseContextConsumer>
          {(ctx?: SynapseContextType) => {
            // TODO: Add routes to different areas (registration)
            // If going to an area that requires a session, prompt for login
            return <></>
          }}
        </SynapseContextConsumer>
      </AppInitializer>
      <Versions />
    </div>
  );
}
export default App;
