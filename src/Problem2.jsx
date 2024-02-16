import React, { useState } from "react";

function Problem2() {
  const [count, setcount] = useState(0);
  const handleReset = () => {
    setcount(0);
  };
  const onIncrementHandler = () => setcount(count + 1);
  const onDecrementHandler = () => setcount(count - 1);
  return (
    <div>
      <button onClick={onIncrementHandler}> add </button>
      <span>{count}</span>
      <button onClick={onDecrementHandler} disabled={count <= 0}>
        {" "}
        minus
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Problem2;


