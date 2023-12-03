import React from "react";

const Countrie = ({countrie}) => {
  const  officialName = countrie.name.official;
  const  capital = countrie.capital;
  const  population = countrie.population;
  const  flag = countrie.flags.png;
  const  area = countrie.area;
  const  languages = countrie.languages;
  const subregion = countrie.subregion; 


  return (
    <div>
      <h1>{officialName}</h1>
      <h3>{subregion}</h3>
      <p>Capital: {capital}</p>
      <p>Area: {area} Km2 </p>
      <p>Population: {population} habitans</p>
      <p>Languages: </p>
      <ul>
      {Object.entries(languages).map(([code, name]) => (
          <li key={code}><strong>{name}</strong> </li>
        ))}
      </ul>
      <img src={flag} alt="Country flag"></img>
    </div>
  );
};

export default Countrie;
