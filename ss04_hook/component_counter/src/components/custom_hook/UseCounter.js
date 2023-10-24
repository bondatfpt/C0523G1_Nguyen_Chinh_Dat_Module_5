import { useState } from 'react';

export const useCounter = (value) => {
  const [count, setCount] = useState(0);
  
  const increase = () => {
    setCount((prevCount) => prevCount + value);
  };
  
  return [count, increase];
};