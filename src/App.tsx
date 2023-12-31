import React from 'react';

import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';

function App() {
  const personName = {
    first: 'Bruce',
    last: "Wayne,"
  }
  
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Wayne'
    },
    {
      first: 'Princes',
      last: 'Wayne'
    },
  ]

  return (
    <div className="App">
     {/* <Button handlerClick={(event, id) => {console.log('click', event, id);}}></Button> */}
    
    {/* <Input value="" handlerChange={(event) => console.log(event)} /> */}
    <Container styles={{border: '1px solid black', padding: '1rem'}}/>
    </div>
  );
}

export default App;
