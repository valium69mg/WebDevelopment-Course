import React,{useState} from "react";

function App() {

  const [name,setName] = useState("")
  const [headingText,setHeading] = useState("")
   
  function handleClick(){
    setHeading(name)
  }
  
  function handleChange(event) {
    setName(event.target.value)
  }
  
  return (
    <div className="App">
      <div className="container"> 
        <h1>Hello, {headingText}</h1>
        <input onChange={handleChange} type="text" placeholder="Your name" value={name}/>
        <button className="submitButton" onClick={handleClick}> Submit </button>
      </div>
    </div>
  );
}

export default App;
