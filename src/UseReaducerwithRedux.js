import { createStore } from "@reduxjs/toolkit";

const initialstate = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function UseReaducerwithRedux() {
  return (
    <div>
      <h1>UseReaducerwithRedux</h1>
    </div>
  );
}
export default UseReaducerwithRedux;

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestloan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payloan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());

// store.dispatch({ type: "account/withdraw", payload: 300 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestloan",
//   payload: { amount: 2000, purpose: "to buy a new laptop" },
// });
// console.log(store.getState());

// store.dispatch({ type: "account/payloan" });
// console.log(store.getState());

function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}

function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}

function requestloan(amount, purpose) {
  return {
    type: "account/requestloan",
    payload: { amount, purpose },
  };
}
function payloan() {
  return {
    type: "account/payloan",
  };
}
store.dispatch(deposit(400));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestloan(4000, "to buy a new laptop"));
console.log(store.getState());

store.dispatch(payloan());
console.log(store.getState());