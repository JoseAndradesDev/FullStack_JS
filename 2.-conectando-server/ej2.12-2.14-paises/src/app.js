import React, { useState, useEffect } from "react";
import axios from "axios";

//Components
import Filter from "./components/Filter";
import Content from "./components/Content";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [filtro, setFilter] = useState("");

  //Extract API data
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setAllCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  //Evento onChange filtro
  const newFilter = (e) => {
    setFilter(e.target.value);

    // Comprueba si hay un valor en 'newFilter'.
    if (filtro) {
      // Crea una expresión regular (regex) que coincide con el 'newFilter' sin ser sensible a mayúsculas y minúsculas.
      const regex = new RegExp(filtro, "i");

      // Filtra los países utilizando la expresión regular y actualiza el estado 'countries' con el resultado.
      const filteredCountries = () =>
        allCountries.filter((country) => country.name.common.match(regex));
      setFilterCountries(filteredCountries);
      
    }
  };

  return (
    <div>
      <h2>MapaMundiWiki.com</h2>

      <Filter newFilter={newFilter} />
      <Content countries={filterCountries} />
    </div>
  );
};

export default App;
