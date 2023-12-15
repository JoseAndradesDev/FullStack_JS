import React, { useState, useEffect } from "react";

//Components
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import Form from "./components/Form";
//Services
import personService from "./services/persons";

const App = () => {
  //Declaracion de estados
  const [persons, setPersons] = useState([]);
  const [filtro, setFilter] = useState("");
  let filterPersons = [];

  useEffect(() => {
    // Realizar la solicitud GET usando axios
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  //Evento onSubmit New Person
  const addPerson = (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let number = e.target[1].value;

    const personObj = {
      name: name,
      number: number,
    };

    //Validacion de los campos del formulario
    const isNewName = persons.find(
      (person) =>
        person.name.toLocaleLowerCase() === personObj.name.toLocaleLowerCase()
    );

    const isNewNumber = persons.find(
      (person) => person.number === personObj.number
    );

    //Si pasamos la validacion creamos el obj en la bd
    if (!isNewName && !isNewNumber) {
      personService.create(personObj).then((lastPerson) => {
        setPersons(persons.concat(lastPerson));
      });
    }
    if (isNewName) {
      const resultadoConfirm = window.confirm(
        personObj.name +
          " ya existe en la agenda, quieres actualizar su numero?"
      );

      if (isNewNumber)
      alert(
        "El numero " + personObj.number + " ya esta registrado en la agenda"
      );

      if (resultadoConfirm) {
        const person = persons.find( (person) => person.name.toLocaleLowerCase() === personObj.name.toLocaleLowerCase())
        //console.log("cambiar " + personObj.name + " nuevo numero - " + personObj.number + ' con id ='+person.id);
        personService.update(person.id, personObj).then((editedPerson) => {
          setPersons(persons.map(personItem => personItem.id !== editedPerson.id ? personItem : editedPerson))
        });
      } else {
        alert("Actualizacion cancelada");
      }
      //
    }
    
    e.target[0].value = "";
    e.target[1].value = "";
  };

  const deletePerson = (id) => {
    const selectedPerson = persons.filter((person) => person.id === id);
    const personName = selectedPerson[0].name;
    const personId = selectedPerson[0].id;
    if (window.confirm(`Delete ${personName} ?`)) {
      personService.remove(personId);
      setPersons(persons.filter((person) => person.id !== personId));
    }
  };

  //Evento onChange filtro
  const newFilter = (e) => {
    setFilter(e.target.value);
  };

  //Renderizar personas Agenda
  const personToShow = (filtro, filterPersons) => {
    if (filtro === "") {
      filterPersons = persons;
    } else {
      filterPersons = persons.filter(
        (person) =>
          person.name.toLocaleLowerCase().indexOf(filtro.toLocaleLowerCase()) >
          -1
      );
    }
    return filterPersons;
  };

  return (
    <div>
      <h2>Agenda Telefonica</h2>
      <p>
        <strong>New Contact</strong>
      </p>
      <Form addPerson={addPerson} />
      <br></br>
      <p>
        <strong>Contact's List: </strong>
      </p>
      <Filter newFilter={newFilter} />
      <br></br>
      <Persons
        personsToShow={personToShow(filtro, filterPersons)}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
