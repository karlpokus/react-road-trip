import { isEqual } from 'underscore';

// equivalent to createStore
export default function reducks(reducer) {
  this.reducer = reducer;
  this.states = [];
  this.subscribers = [];
  // run reducer so we have initial state ready
  this.dispatch({type: '_INITIAL_RUN'});
}

reducks.prototype._runSubscribers = function() {
  if (this.subscribers.length) {
    this.subscribers.forEach(fn => fn());
  }
}

reducks.prototype.getState = function() {
  return this.states[0];
}

reducks.prototype.subscribe = function(fn) {
  this.subscribers.push(fn);
}

reducks.prototype.dispatch = function(action) {
  let prev = this.getState();
  let next = this.reducer(prev, action);

  if (!prev) {
    return this.states.unshift(next);
  }

  if (!isEqual(prev, next)) {
    this.states.unshift(next);
    this._runSubscribers();
  }
}

// todos
// - dont unshift unchanged state
// - middleware
