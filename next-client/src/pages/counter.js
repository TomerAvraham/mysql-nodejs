import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleCounterClick() {
    setCounter((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h1>Counter is: {counter}</h1>
      <hr />
      <button onClick={handleCounterClick}>Increment</button>
    </div>
  );
}
