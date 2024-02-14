import React from 'react';
import cars from './practice';


/*
DECONSTRUCTING OF VARIABLES
*/ 
// TOP CAR OBJECTS
const honda= cars[0]
const tesla = cars[1]
// TOP SPEED
const hondaTopSpeed = cars[0].speedStats.topSpeed
const teslaTopSpeed = cars[0].speedStats.topSpeed
// TOP COLOUR
const hondaTopColour = cars[0].coloursByPopularity[0]
const teslaTopColour = cars[1].coloursByPopularity[0]


function App() {
  return (
    <div className="App">
      <table className="carsTable">
       <tr>
         <th>Brand</th>
         <th>Top Speed</th>
       </tr>
       <tr>
         <td>{tesla.model}</td>
         <td>{teslaTopSpeed}</td>
         <td>{teslaTopColour}</td>
       </tr>
       <tr>
         <td>{honda.model}</td>
         <td>{hondaTopSpeed}</td>
         <td>{hondaTopColour}</td>
       </tr>
     </table>
    </div>
  );
}

export default App;

