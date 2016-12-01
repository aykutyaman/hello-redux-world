import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';

// reducer:
// It describes how an action transforms the state into the next state.
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

store.subscribe(() => {
  render();
});

const render = () => {
  ReactDOM.render(
    <App
      count={store.getState()}
      onIncrement={() => {
          store.dispatch({
            type: 'INCREMENT',
          });
        }}
      onDecrement={() => {
          store.dispatch({
            type: 'DECREMENT',
          });
        }}
    />,
    document.getElementById('root')
  );
};

render();
