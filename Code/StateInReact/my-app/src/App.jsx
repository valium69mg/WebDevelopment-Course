import React, {useState} from "react";

function App()  {
  // Initial state of 0 for the counter using *destructuring*
  const [count, setCount] = useState(0); 
  /* 
  Function to increase the counter by 1
  */
  function increase(){
    setCount(count+1);
  }
/* 
  Function to decrease the counter by 1
  */
  function decrease(){
    setCount(count-1);
  }
  /* 
  Returns the rendered DOM with the new counter value 
  */
  return (
    <div className="container">
      <h1>{count}</h1>
      <button id="increase" onClick={increase}>+</button>
      <button id="decrease" onClick={decrease}>-</button>
    </div>
  );
}

export default App;
