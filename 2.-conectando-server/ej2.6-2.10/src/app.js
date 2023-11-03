import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  //Declaracion de estados 
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [filtro, setFilter] = useState('')
  let filterPersons = []

 
  //Function new person
  const addPerson = (e) => {
    e.preventDefault();
    let name = e.target[1].value
    let number = e.target[2].value
    
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
    e.target[1].value = ''
    e.target[2].value = ''
    
  }

  //Renderizar personas Agenda
  const personToShow = (filtro, filterPersons) => {
   
    if(filtro===''){
     filterPersons = persons;
    }else{
     filterPersons = persons.filter(person => person.name.toLocaleLowerCase().indexOf(filtro.toLocaleLowerCase()) > -1);
    }
    return filterPersons
  }
  


  //Evento onChange filtro
  const newFilter = (e) => {
    setFilter(e.target.value)
  }
 



  return (
    
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <Filter newFilter={newFilter}/>
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
      
      <Persons personsToShow={personToShow(filtro,filterPersons)}/>
      
    </div>
    
  )
  
}

export default App