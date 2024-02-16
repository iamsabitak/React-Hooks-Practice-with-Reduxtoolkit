import { useState } from "react";

function useCustom() {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  };
  const minusOne = () => {
    setCounter(counter - 1);
  };

  return [counter, addOne, minusOne];
}

export default useCustom;
