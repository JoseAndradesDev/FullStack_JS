import React, { useState } from "react";
import axios from "axios";

const Countrie = ({countrie}) => {
  const  officialName = countrie.name.official;
  const  capital = countrie.capital;
  const  population = countrie.population;
  const  flag = countrie.flags.png;
  const  area = countrie.area;
  const  languages = countrie.languages;
  const continent = countrie.continents; 
  const subregion = countrie.subregion; 

 const url = 'https://goweather.herokuapp.com/weather/'

 const [weather, setWeather] = useState([])

  axios.get(url+capital)
  .then(response => {
    const apiResponse = response.data;
    setWeather(apiResponse)  
  }).catch(error => {
    console.log(error);
  })
  

  //
  return (
    <div> 
      <h1>{officialName}</h1>
      <img src={flag} alt="Country flag"></img>
      <h2>{continent}</h2>
      <p><strong>{subregion}</strong></p>
      <p>Area: {area} Km2 </p>
      <p>Population: {population} habitans</p>
      <p>Languages: </p>
      <ul>
      {Object.entries(languages).map(([code, name]) => (
          <li key={code}> {name}</li>
        ))}
      </ul>
      <p>Capital: {capital}</p>
      <p>Weather in {capital} : </p>
      <ul>
        <li>Temperature: {weather.temperature}</li>
        <li>Wind Speed: {weather.wind}</li>
        <li>Descrption: {weather.description}</li>
      </ul>
      
      
    </div>
  );
};

export default Countrie;
