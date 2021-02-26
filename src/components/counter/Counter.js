import React, { useState } from 'react';
import Button from '../button/Button';
// import styles from './counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
    // add useEffect for color change
  };

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    // add useEffect for color change [count]
  };

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <p>You've clicked {count} times!</p>
      </div>
      <div className='btnWrapper'>
        <Button onClick={() => subtract()}>-</Button>
        <Button onClick={() => add()}>+</Button>
      </div>
    </div>
  );
};

export default Counter;
