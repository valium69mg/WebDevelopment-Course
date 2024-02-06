import React from 'react';
import Card from './Card';
import contacts from './Contacts';

function CreateCard(contact){
  return <Card
    key={contact.id}
    name={contact.name}
    imgURL={contact.imgURL}
    tel={contact.tel}
    mail={contact.mail}
  />
};

function App() {
  return (
    <div className="App">
    <div class="contactList">
      <h1> My Contacts </h1>
      
      {contacts.map(CreateCard)}
      
    </div>
  </div>);
}

export default App;
