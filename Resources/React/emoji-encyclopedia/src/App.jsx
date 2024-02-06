import React from 'react';
import emojis from './Emojis';
import Card from './Card';

function CreateCard(info){
  return <Card
    key={info.id}
    name={info.name}
    img={info.img}
    desc={info.desc}
  />
}

function App() {
  return (
    <div className="App">
      <h1> Emoji Encyclopedia </h1>
      <div class="cards">
      {emojis.map(CreateCard)}
      </div>
    </div>
  );
}

export default App;
