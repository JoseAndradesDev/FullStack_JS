import React from "react";

const Countrie = ({countrie}) => {
  const  officialName = countrie.name.official;
  const  capital = countrie.capital;
  const  population = countrie.population;
  
  return (
    <div>
      <h1>{officialName}</h1>
      <p>capital: {capital}</p>
      <p>population: {population} Millions habitans</p>
    </div>
  );
};

export default Countrie;
