import React, { useState, useEffect } from "react";
import axios from "axios";

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
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        // Manipular los datos y establecerlos en el estado
        setPersons(response.data);
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
      alert(personObj.name + " ya existe en la agenda");
    }
    if (isNewNumber)
      alert(
        "El numero " + personObj.number + " ya esta registrado en la agenda"
      );
    e.target[0].value = "";
    e.target[1].value = "";
  };

  const deletePerson = (id) => {
    const selectedPerson = persons.filter((person) => person.id === id);
    const personName = selectedPerson[0].name;
    const personId = selectedPerson[0].id;
    if (window.confirm(`Delete ${personName} ?`)) {
      personService.remove(personId);
      console.log(`${personName} successfully deleted`);

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
