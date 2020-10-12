import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  useEffect(() => {
   document.title = `count: ${count}`;
   return () => { document.title = 'no counter' };
  }, [count]);

  return (
    <div>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>increment</button>
      </div>
    </div>
  )
}