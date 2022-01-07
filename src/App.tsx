import React from 'react';
import './App.css';
import OAuth2Form from './OAuth2Form';
import AppInitializer from './AppInitializer'
import Versions from './Versions'
import { SynapseContextConsumer, SynapseContextType } from 'synapse-react-client/dist/utils/SynapseContext';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppInitializer>
        <SynapseContextConsumer>
          {(ctx?: SynapseContextType) => {
            return <OAuth2Form context={ctx}/>
          }}
        </SynapseContextConsumer>
      </AppInitializer>
      <Versions />
    </div>
  );
}
export default App;
