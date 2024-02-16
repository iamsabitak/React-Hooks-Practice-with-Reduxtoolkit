import React from "react";
import useCustom from "./useCustom";

function Counter() {
  const [counter, addOne, minusOne] = useCustom(10);
  return (
    <div>
      <button onClick={addOne}>
        plus
      </button>
      <span>{counter}</span>
      <button onClick={minusOne}>minus</button>
    </div>
  );
}

export default Counter;
