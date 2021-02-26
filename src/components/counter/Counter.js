import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import styles from './counter.module.css';
var randomColor = require('randomcolor');

const Counter = () => {
  const [count, setCount] = useState(0);
  const [totalCount, setTotal] = useState(0);
  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(randomColor());
  }, [count]);

  const add = () => {
    setCount(count + 1);
    setTotal(totalCount + 1);
  };

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    setTotal(totalCount + 1);
  };

  return (
    <div className={styles.counterWrapper}>
      <h1 className={styles.counter} style={{ color: color }}>
        {count}
      </h1>
      <p>You've clicked {totalCount} times!</p>
      <div>
        <Button onClick={() => subtract()}>-</Button>
        <Button onClick={() => add()}>+</Button>
      </div>
    </div>
  );
};

export default Counter;
