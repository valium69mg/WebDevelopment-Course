import React from 'react';


function Note(props){
    return (
        <div class="note">
            <h1 class='note'> {props.title} </h1>
            <p class='note'> {props.content} </p>
        </div>
    )
}


export default Note;
