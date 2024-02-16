import React, { useRef, useState } from "react";

function UseRef() {
  //directly manipulate the react DOM by the help of useRef using the key word "current"
  const refElement = useRef();
  console.log(refElement);

  const [name, setName] = useState("Sabu");

  const reSet = () => {
    setName("");
    refElement.current.focus();
  };
  return (
    <div className="bg-teal-600">
      <h1 className="text-3xl font-bold underline">useRef</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        
      />
      <button onClick={reSet}>submit</button>
    </div>
  );
}

export default UseRef;
