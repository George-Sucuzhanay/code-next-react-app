import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  // const used = usedState(0);

  const increment = () => setCount(count + 1);
  const decrement = () =>
  return 
    <div>
      <div>count:{count} </div>
        <div>
          <button onClick={increment}</button>
          <button>decrement</button>
  };

