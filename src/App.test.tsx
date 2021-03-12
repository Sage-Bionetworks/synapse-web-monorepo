import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  window.history.pushState({}, 'Synapse Sign-In', '/?client_id=1234');  
  shallow(<App />)
});
