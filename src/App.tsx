import React from 'react';
import './App.css';
import OAuth2Form from './OAuth2Form';
import AppInitializer from './AppInitializer'

const App: React.FC = () => {
  return (
    <div className="App container">
      <AppInitializer>
        <OAuth2Form />
      </AppInitializer>
    </div>
  );
}

export default App;
