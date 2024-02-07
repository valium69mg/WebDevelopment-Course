import React from 'react';
import './App.css';
import Login from './Login';

let isLoggedIn = false;
let user = "user";


function RenderConditionally(){
  if (isLoggedIn === true){
    return <h1> {`Hello ${user}.`} </h1> ;
    } else {
    return <Login/>;
    }
  }

function App() {
  return (
    <div className="App">
      <RenderConditionally/>
    </div>
  );
}

export default App;
