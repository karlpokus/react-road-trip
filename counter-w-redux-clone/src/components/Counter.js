import React from 'react';
import increment from '../actions'

function clickHandler(v) {
  this.dispatch(increment(v));
}

const Counter = ({ v, store }) => (
  <button
    onClick={ clickHandler.bind(store, v) }
  >
    increment by { v }
  </button>
)

export default Counter;
