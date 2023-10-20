import React from "react";
import { useState } from "react";

export default function Counter2() {
  const [count2, setCount2] = useState(0);
  const handleChange2 = () => {
    const newValue = count2 + 2;
    setCount2(newValue);
  };
  return (
    <div>
      <h2>Count 2: {count2}</h2>
      <button onClick={handleChange2}>Add 2</button>
    </div>
  );
}
