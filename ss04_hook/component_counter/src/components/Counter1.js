import React from "react";
import { useCounter } from "./custom_hook/UseCounter";
export default function Counter1() {
  const [count1, setCount1] = useCounter(1);
  const handleChange1 = () => {
    setCount1();
    console.log(count1);
  };
  return (
    <div>
      <h2>Count 1: {count1}</h2>
      <button onClick={handleChange1}>Add 1</button>
    </div>
  );
}
