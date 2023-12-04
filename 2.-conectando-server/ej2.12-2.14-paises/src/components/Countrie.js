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
      <p><strong>Capital: </strong>{capital}</p>
      <p><strong>Area: </strong>{area} Km2 </p>
      <p><strong>Population: </strong>{population} habitans</p>
      <p><strong>Languages: </strong></p>
      <ul>
      {Object.entries(languages).map(([code, name]) => (
          <li key={code}> {name}</li>
        ))}
      </ul>
      
      <strong><p>Weather in {capital} : </p></strong>
      <ul>
        <li>Temperature: {weather.temperature}</li>
        <li>Wind Speed: {weather.wind}</li>
        <li>Descrption: {weather.description}</li>
      </ul>
      
      
    </div>
  );
};

export default Countrie;
