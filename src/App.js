import React from 'react';

// It's a dumb component
// It does not contain any business logic
const App = ({
  count,
  onIncrement,
  onDecrement,
}) => (
  <div>
    <h1>{count}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

export default App;
