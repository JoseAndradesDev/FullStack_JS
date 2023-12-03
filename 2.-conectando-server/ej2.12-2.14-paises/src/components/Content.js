import React from "react";
import Countrie from "./Countrie";

const Content = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Demasiados paises, especifica mas</p>;
    
  } else if (countries.length <= 10 && countries.length > 1) {
    /*return (
      <ul>
        {countries.map((countrie, i) => (
          <li key={countrie[i].name}>{countrie[i].name}</li>
        ))}
      </ul>
    );*/
    
  } else if (countries.length === 1) {
    return <Countrie countrie={countries[0]} />;
  }

  
};

export default Content;
