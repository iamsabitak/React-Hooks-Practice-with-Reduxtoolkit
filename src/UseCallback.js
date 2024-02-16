import React, { useCallback, useState } from "react";
import Hello from "./Hello";

function UseCallback() {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  };
  const minusOne = () => {
    setCounter(counter - 1);
  };

  const learning = useCallback(() => {
    console.log(counter);
  }, [counter]);
  return (
    <div>
      <Hello learning={learning} />
      <button onClick={addOne}>plus</button>
      <span>{counter}</span>
      <button onClick={minusOne}>minus</button>
    </div>
  );
}

export default UseCallback;
