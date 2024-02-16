import React, { useState } from "react";

function Problem3() {
  const [name, setname] = useState("");
  const [todos, setTodos] = useState([]);

  const onAdd = () => {
    setTodos([...todos, name]);
  };
  const deleteTodo = (index) => {
    setTodos((preName) => preName.filter((_, item) => item !== index));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter the name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Problem3;
