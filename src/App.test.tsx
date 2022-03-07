import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  window.history.pushState({}, 'Sage account', '/route');
  shallow(<App />)
});
