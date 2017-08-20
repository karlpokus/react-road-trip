import React from 'react';
import { render } from 'react-dom';
import App from './App';
import reducks from './lib/reducks';
import reducer from './reducer'

function cowboy(state) {
  console.log('howdie');
}

function logger(state) {
  console.log('v:', state.v);
}

let store = new reducks(reducer, cowboy, logger);

render(
  <App store={ store } />,
  document.getElementById('root')
);
