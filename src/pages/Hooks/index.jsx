import React, { useState, useEffect } from "react";

function Hooks() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `click ${count} time`;
    // console.log("第一个effect");
  }, [count]);
  useEffect(() => {
    // console.log("第二个effect");
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>点击+1</button>
    </div>
  );
}
export default Hooks;
