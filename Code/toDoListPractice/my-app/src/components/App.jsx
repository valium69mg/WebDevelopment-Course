import React, { useState } from "react";

function App() {

  const [item,setItem] = useState("");

  const [listOfItems,setListOfItems] = useState([]);

  function handleChange(event){
    const value = event.target.value;
    setItem(value);
  }

  function handleClick(){
    setListOfItems(prevValue => {
      return [...prevValue, item];
    });
    
  }
  
  return (
    <div className="container">
      <div className="todolist"></div>
        <h1> TO-DO LIST</h1>
        <div className="input">
        <input
          onChange={handleChange}
          name="item"
          value={item}
          placeholder="Entry item"
        /> 
        <button onClick={handleClick}> Add </button>
        </div>
        <div className="list">
          <ul>
            {listOfItems.map((item) => {return <li key={listOfItems.indexOf(item)}> {item}</li>})}
          </ul>
        </div>
    </div>
  );
}

export default App;
