import React, { memo } from "react";

function Hello({ learning }) {
  function hello() {
    console.log("Hello");
  }
  hello();
  return <div>Hello</div>;
}

export default memo(Hello);
