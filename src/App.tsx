import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoChallengeSubmissionForm from './DemoChallengeSubmissionForm'

const App: React.FC = () => {
  return (
    <div className="App container">
      <DemoChallengeSubmissionForm
        token='' //TODO: {this.state.token!}
        parentContainerId="syn18987891"
      />
    </div>
  );
}

export default App;
