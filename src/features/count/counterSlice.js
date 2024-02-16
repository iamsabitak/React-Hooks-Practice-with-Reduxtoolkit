import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 10,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.amount = state.amount + action.payload;
    },
    decrease: (state, action) => {
      state.amount = state.amount - action.payload;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
