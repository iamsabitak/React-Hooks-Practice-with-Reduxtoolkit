import React, { useMemo, useState } from "react";

function MemoConcept() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multipliedValue = useMemo(() => {
    const multiPly = () => {
      console.log("object");
      return add * 10;
    };
    return multiPly();
  }, [add]);

  return (
    <div>
      {multipliedValue}
      <button onClick={() => setAdd(add + 1)}>+</button>
      {add}
      <button onClick={() => setMinus(minus - 1)}>-</button>
      {minus}
    </div>
  );
}

export default MemoConcept;
