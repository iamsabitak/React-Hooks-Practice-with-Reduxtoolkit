import axios from "axios";
import React, { useRef, useState } from "react";

const PostApiAxios = () => {
  const data = { fname: "", lname: "" };
  const [input, setInput] = useState(data);
  const element = useRef();
  // const [submitName, setSubmitName] = useState(""); // State to hold submitted name

  //   const handleOnChange = (e) => {
  //     const { name, value } = e.target;
  //     setInput((prevInput) => ({
  //       ...prevInput,
  //       [name]: value,
  //     }));
  //   };
  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", input)
      .then((res) => {
        const userName = res.data;
        console.log(userName);
        // setSubmitName(userName);
        console.log(res);
        element.current.focus();
        // Save data to local storage
        // localStorage.setItem("userName", JSON.stringify(userName));
      });
  };

  // React.useEffect(() => {
  //   const storedData = localStorage.getItem("userName");
  //   if (storedData) {
  //     setSubmitName(JSON.parse(storedData));
  //   }
  // }, []);

  const handleUpdate = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", input)
      .then((res) => console.log(res));
      element.current.focus();
  };

  const handleDelete = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => console.log(res));
      element.current.focus();
  };

  return (
    <div>
      <h1>
        Hello {input.fname} {input.lname}
      </h1>
      <label>First Name: </label>
      <input
        ref={element}
        type="text"
        name="fname"
        placeholder="first name"
        value={input.fname}
        onChange={handleOnChange}
      />

      <label>Last Name: </label>
      <input
        ref={element}
        type="text"
        name="lname"
        placeholder="last name"
        value={input.lname}
        onChange={handleOnChange}
      />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>

      {/* <div>
        <h1>Submitted Information:</h1>
        <h2>
          {submitName.fname} {submitName.lname}
        </h2>
      </div> */}
    </div>
  );
};

export default PostApiAxios;

// import React, { useState } from "react";
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";

// function PostApiAxios() {
//   const [formData, setFormData] = useState({ fname: "", lname: "" });

//   const handlePost = async (formData) => {
//     return axios.post("https://jsonplaceholder.typicode.com/users", formData);
//   };

//   const handleUpdate = async (formData) => {
//     return axios.put("https://jsonplaceholder.typicode.com/users/1", formData);
//   };

//   const handleDelete = async () => {
//     return axios.delete("https://jsonplaceholder.typicode.com/users/1");
//   };

//   const postMutation = useMutation(handlePost);
//   const updateMutation = useMutation(handleUpdate);
//   const deleteMutation = useMutation(handleDelete);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     postMutation.mutate(formData);
//   };

//   const handleUpdateClick = () => {
//     updateMutation.mutate(formData);
//   };

//   const handleDeleteClick = () => {
//     deleteMutation.mutate();
//   };

//   const handleInputChange = (e) => {
//     // const { name, value } = e.target;
//     // setFormData((prevData) => ({
//     //   ...prevData,
//     //   [name]: value,
//     // }));
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <label>First Name: </label>
//       <input
//         type="text"
//         name="fname"
//         placeholder="first name"
//         value={formData.fname}
//         onChange={handleInputChange}
//       />

//       <label>Last Name: </label>
//       <input
//         type="text"
//         name="lname"
//         placeholder="last name"
//         value={formData.lname}
//         onChange={handleInputChange}
//       />

//       <button onClick={handleSubmit}>Submit</button>
//       <button onClick={handleUpdateClick}>Update</button>
//       <button onClick={handleDeleteClick}>Delete</button>
//     </div>
//   );
// }

// export default PostApiAxios;
