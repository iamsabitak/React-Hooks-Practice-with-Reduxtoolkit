import axios from "axios";

import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUser(res.data));
    };
    fetchData();
  }, []);

  const saveName = (selecteduser) => {
    setUserName([...userName, selecteduser]);
  };

  // const saveName = (selecteduser) => {
  //   const Addname = [...userName, selecteduser];
  //   setUserName(Addname);
  //   localStorage.setItem("Save", JSON.stringify(Addname));
  // };

  // useEffect(() => {
  //   const savedData = localStorage.getItem("Save");
  //   if (savedData !== null) {
  //     setUserName(JSON.parse(savedData));
  //   }
  // }, []);

  const deletefromSaved = (id) => {
    const updatedName = userName.filter((data) => data.id !== id);
    setUserName(updatedName);
    // localStorage.setItem("delete", JSON.stringify(updatedName));
  };
  return (
    <div className="bg-teal-600">
      <div>
        <h1>Given</h1>
        {user.map((data) => {
          return (
            <div key={data.id}>
              <h1>{data.name}</h1>
              <button
                className="Add-To-list"
                onClick={() => saveName(data.name)}
              >
                Save
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Saved</h1>
        {userName.map((user, index) => {
          return (
            <div key={`${user.id}-${index}`}>
              <h1>{user.name}</h1>{" "}
              <button
                className="Delete-from-list"
                onClick={() => deletefromSaved(user.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
