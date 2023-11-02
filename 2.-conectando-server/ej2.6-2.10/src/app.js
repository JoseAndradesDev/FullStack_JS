import React, { useState } from 'react'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '954783218' },
    { name: 'Frank Nuchhelst', number: '602781265' }
  ]) 
  

  //Function new person
  const addPerson = (e) => {
    e.preventDefault();
    let name = e.target[0].value
    let number = e.target[1].value
    
    const personObj= {
      name: name,
      number:  number
    }

    const isNewName = persons.find( (person) => (
      person.name.toLocaleLowerCase() === personObj.name.toLocaleLowerCase()
    ));

    const isNewNumber = persons.find( (person) => (
      person.number === personObj.number
    ));
    
    if(!isNewName && !isNewNumber){
      setPersons([...persons, personObj])
    }if(isNewName){
      alert(personObj.name+' ya existe en la agenda')
    }if(isNewNumber)(
      alert('El numero '+personObj.number+' ya esta registrado en la agenda')
    )
    e.target[0].value = ''
    e.target[1].value = ''
  }


  return (
    
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input required/>
        </div>
        <div>
          number: <input required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      <Persons personsToShow={persons}/>
      
    </div>
    
  )
  
}

export default App