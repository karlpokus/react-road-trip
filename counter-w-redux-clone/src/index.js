import React from 'react';
import { render } from 'react-dom';
import App from './App';
import reducks from './lib/reducks';
import reducer from './reducer'

// pass reducer here
let store = new reducks(reducer);

render(
  <App store={ store } />,
  document.getElementById('root')
);
