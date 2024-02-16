import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./features/count/counterSlice";

function CounterRedux() {
  const dispatch = useDispatch();

  //if in store.js reducer is wriiten like this 
  // const store = configureStore({
//     reducer: {
//       counter: counterReducer,
//     },
    
//   });
// we have to do here like this
  // const counter = useSelector((state) => state.counter.amount);
  
  const counter = useSelector((state) => state.amount);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        className="bg-sky-500 hover:bg-sky-700..."
        onClick={() => dispatch(increase(10))}
      
      >
        Add
      </button>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(decrease(10))}> Subtract </button>
    </div>
  );
}

export default CounterRedux;
