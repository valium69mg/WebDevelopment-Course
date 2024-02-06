import React from 'react';


function Card(props){
    return( <div class="card"> 
    
    <h2>{props.name}</h2>
    
    <img
        src={props.imgURL}
        alt="avatar_img"
    />
    <div class="botCard">
      <p>{props.tel}</p>
      <p>{props.mail}</p>
    </div>
  </div>);
};

export default Card;
