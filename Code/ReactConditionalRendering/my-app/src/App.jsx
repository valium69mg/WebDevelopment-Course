import React from 'react';
import './App.css';
import Login from './Login';

let isLoggedIn = false;
let userIsRegistered = false;
let user = "User";

function App() {
  return (
    <div className="App">{
      isLoggedIn === true ? 
      <h1> Hello {user}. </h1>:<Login isRegistered={userIsRegistered}/>
      }
    </div>
  );
}

export default App;
