import React, { useState } from "react";

function App() {
  
  const [fullName,setFullName] = useState({
    fName:"",
    lName:""
  });
   
  function handleChange(event){
    const newValue = event.target.value; // Value of the changed name
    const inputName = event.target.name; // Name that has been changed

    setFullName(prevValue => {
      if (inputName === "fName"){
        return {
          fName: newValue,
          lName: prevValue.lName
        }
      }
      else if (inputName === "lName"){
        return {
          fName: prevValue.fName,
          lName: newValue
        }
      }
    });
  }

  

  return (
    <div className="App">
      <div className="container"> 
        <h1>Hello, {fullName.fName + " " + fullName.lName} </h1>
        <input 
          name="fName" 
          onChange={handleChange} 
          type="text" 
          placeholder="FirstName" 
          value={fullName.fName}/>
        <input 
          name ="lName" 
          onChange={handleChange} 
          type="text" 
          placeholder="LastName" 
          value={fullName.lName}/>
        <button className="submitButton"> Submit </button>
      </div>
    </div>
  );
}
export default App;
