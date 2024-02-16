import React from "react";
import { FNameContex } from "./App1";

function ComC() {
  return (
    <div>
      <FNameContex.Consumer>
        {(fname) => {
          return <h1>MY NAME IS {fname}</h1>;
        }}
      </FNameContex.Consumer>
    </div>
  );
}

export default ComC;

