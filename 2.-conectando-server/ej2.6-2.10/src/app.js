import React, { useState } from 'react'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  

  //Function new person
  const addPerson = (e) => {
    e.preventDefault();
    let valor = e.target[0].value
    
    const newPerson = {
      name: valor
    }
   
    setPersons([...persons, newPerson])
    e.target[0].value = ''
    
  }


  return (
    
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input />
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