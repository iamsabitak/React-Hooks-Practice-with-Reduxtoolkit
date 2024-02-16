import React from "react";

import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import { useParams } from "react-router-dom";

function GetApi() {

  const param = useParams();
  console.log(param);

//   This function should be defined to fetch data

  async function getTodos() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }
  const {
    isLoading,
    error,
    data: users,
  } = useQuery({
    queryKey: ["name"],
    queryFn: getTodos,
    //   staleTime: 10000
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Get Api</h1>
      {users.map((data) => (
        <div key={data.id}>
          <h1>{data.name}</h1>
          <h1>{data.email}</h1>{" "}
        </div>
      ))}
    </div>
  );
}

export default GetApi;