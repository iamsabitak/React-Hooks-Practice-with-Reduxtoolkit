import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/count/counterSlice";

// const store = configureStore({
//     reducer: {
//       counter: counterReducer,
//     },
    
//   });
  const store = configureStore({
    reducer: counterReducer
  });
  
  export default store;