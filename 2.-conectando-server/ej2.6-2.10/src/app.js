import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'

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

  //Evento onSubmit New Person
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
  //Evento onChange filtro
  const newFilter = (e) => {
    setFilter(e.target.value)
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
  
  return (
    <div>
      <h2>Agenda telefonica</h2>
      <Filter newFilter={newFilter}/>
      <Form addPerson={addPerson}/>
      <Persons personsToShow={personToShow(filtro,filterPersons)}/> 
    </div>
  )
}

export default App