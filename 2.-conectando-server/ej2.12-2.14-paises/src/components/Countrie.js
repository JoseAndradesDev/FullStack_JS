import React from "react";

const Countrie = ({countrie}) => {
  const  officialName = countrie.name.official;
  const  capital = countrie.capital;
  const  population = countrie.population;
  const  flag = countrie.flags.png;
  const  area = countrie.area;
  const continent = countrie.continents; 

  
  return (
    <div>
      <h1>{officialName}</h1>
      <h3>{continent}</h3>
      <p>capital: {capital}</p>
      <p>population: {population} Millions habitans</p>
      <p>area: {area} Km2 </p>
    
      <img src={flag} alt="Country flag"></img>
    </div>
  );
};

export default Countrie;
