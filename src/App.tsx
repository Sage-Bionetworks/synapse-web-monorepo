import React from 'react';
import './App.css';
import OAuth2Form from './OAuth2Form';
import AppInitializer from './AppInitializer'
import Versions from './Versions'

const App: React.FC = () => {
  return (
    <div className="App container">
      <AppInitializer>
        <OAuth2Form />
      </AppInitializer>
      <Versions />
    </div>
  );
}
export default App;
