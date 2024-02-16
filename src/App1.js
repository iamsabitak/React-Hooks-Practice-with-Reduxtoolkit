import React, { createContext } from "react";
import ComA from "./ComA";

const FNameContex = createContext();

function App1() {
  //   const name = "Sabita Khadka";
  return (
    <>
      <FNameContex.Provider value={"Sabita Khadka"}>
        <ComA />
      </FNameContex.Provider>
    </>
  );
}

export default App1;
export { FNameContex };
