import React, { Component } from 'react';
import Counter from './components/Counter'

class App extends Component {
  constructor(props) {
    super(props);

    // this can't be right :/
    props.store.subscribe(this.forceUpdate.bind(this));
  }

  render() {
    const { store } = this.props;
    const { v } = store.getState();

    return (
      <div>
        <p>Any counter will update global state: { v }</p>
        <Counter v={ 1 } store={ store }/>
        <Counter v={ 5 } store={ store }/>
      </div>
    );
  }
}

export default App;
