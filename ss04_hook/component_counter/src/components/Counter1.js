import React from "react";
import { useState } from "react";

export default function Counter1() {
  const [count1, setCount1] = useState(0);
  const handleChange1 = () => {
    const newValue = count1 + 1;
    setCount1(newValue);
  };
  return (
    <div>
      <h2>Count 1: {count1}</h2>
      <button onClick={handleChange1}>Add 1</button>
    </div>
  );
}
