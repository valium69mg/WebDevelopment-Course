import React from "react";

function Card(props){
    return <div class="singleCard">
        <h2> {props.name} </h2>
        <img src={props.img} alt="emoji_img"></img>
        <p> {props.desc} </p>

    </div>
};

export default Card;