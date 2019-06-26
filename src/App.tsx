import React from 'react';
import './App.css';
import DemoChallengeSubmissionForm from './DemoChallengeSubmissionForm'
import AppInitializer from './AppInitializer'

const App: React.FC = () => {
  return (
    <div className="App container">
      <AppInitializer>
        <DemoChallengeSubmissionForm
          evaluationQueueId="12345"
          parentContainerId="syn18987891"
        />
      </AppInitializer>
    </div>
  );
}

export default App;
