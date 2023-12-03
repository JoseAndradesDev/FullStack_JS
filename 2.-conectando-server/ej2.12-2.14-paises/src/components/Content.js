import React from "react";
import Countrie from "./Countrie";

const Content = ({ countries, setFilterCountries }) => {

  if (countries.length > 10) {
    return <p>Demasiados paises, especifica mas</p>;
    
  } else if (countries.length <= 10 && countries.length > 1) {
     return (
        <div>
          {countries.map((country, i) => {
            return(
                <div key={i}><p>{country.name.common} - <button onClick={() => setFilterCountries([country])}>info</button></p></div> 
            )
             
          }
          )}
        </div>
      )

  } else if (countries.length === 1) {
    return <Countrie countrie={countries[0]} />;
  }

  
};

export default Content;
