import React from 'react';
import './App.css';
import Login from './Login';

let isLoggedIn = false;
let user = "User";

function App() {
  return (
    <div className="App">{
      isLoggedIn === true ? 
      <h1> Hello {user}. </h1>:<Login/>
      }
    </div>
  );
}

export default App;
