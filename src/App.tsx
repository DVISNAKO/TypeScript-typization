import React from 'react';

import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

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
      <Greet name='Dima' messageCout={20} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
