import React, { useRef, useState } from "react";

function Problem4() {
  const [saveName, setSaveName] = useState([]);
  const [name, setName] = useState("");

  const inputValue = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("render0");
    if (name.length === 0) {
      alert("Fill the name first");
      return;
    }
    inputValue.current.focus();
  };

  const onhandleAdd = () => {
    console.log("render1");
    const savedname = [...saveName, name];
    setSaveName(savedname);
    localStorage.setItem("savedname", JSON.stringify(savedname));
  };
  React.useEffect(() => {
    const storedData = localStorage.getItem("savedname");
    if (storedData) {
      setSaveName(JSON.parse(storedData));
    }
  }, []);

  const onhandleDelete = (index) => {
    console.log("render2");
    const deletename = (prevName) => prevName.filter((_, i) => i !== index);
    setSaveName(deletename);
    localStorage.setItem("deletename", JSON.stringify(deletename));
  };
  return (
    <div>
      Problem4
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          ref={inputValue}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <button onClick={onSubmitHandler}>Submit</button> */}
        <button onClick={onhandleAdd}>Add</button>
      </form>
      <ul>
        {saveName.map((name, index) => (
          <li key={index}>
            {name}
            <button onClick={() => onhandleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Problem4;
