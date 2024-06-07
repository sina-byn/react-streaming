import * as React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const decrement = () => setCount(prev => prev - 1);
  const increment = () => setCount(prev => prev + 1);

  return (
    <div className='counter' style={{ display: 'flex', gap: '0.5rem' }}>
      <button type='button' onClick={decrement}>
        decrement
      </button>
      {count}
      <button type='button' onClick={increment}>
        increment
      </button>
    </div>
  );
};

export default Counter;
