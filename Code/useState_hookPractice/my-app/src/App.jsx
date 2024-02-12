import React, {useState} from "react";


function App() {
  

  setInterval(updateTime,1000)

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now)

  function getTime() {
    return time;
  }
  
  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }

  return (
    <div className="App">
      <h1>  {time} </h1>
      <button onClick={getTime}> GET TIME </button>
    </div>
  );
}

export default App;
