import React from "react";
import { useCounter } from "./custom_hook/UseCounter";

export default function Counter2() {
  const [count2, setCount2] = useCounter(2);
  const handleChange2 = () => {
    setCount2();
  };
  return (
    <div>
      <h2>Count 2: {count2}</h2>
      <button onClick={handleChange2}>Add 2</button>
    </div>
  );
}
