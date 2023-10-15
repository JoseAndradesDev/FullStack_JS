import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {

  //Clicks es el arrary como objeto js de los estados, setClick el disparador de renderizado
  const [clicks, setClicks] = useState({good: 0, neutral: 0, bad: 0,});


  //Setters que actualizan solo el valor correspondiente 
  const setGood = () => setClicks({ ...clicks, good: clicks.good + 1 });
  const setNeutral = () => setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  const setBad = () => setClicks({ ...clicks, bad: clicks.bad + 1 });


  //Llamar a los componentes
  return (
    <div>
      <Header titulo="give feedback" />

      <Boton onClick={setGood} text="good" />
      <Boton onClick={setNeutral} text="neutral" />
      <Boton onClick={setBad} text="bad" />

      <Header titulo="Statistics" />

      <Statistics clicks={clicks} />
    </div>
  );
};


//Creacion de componentes
const Header = ({ titulo }) => <h1>{titulo}</h1>;

//Comp. para botones que define su onclick
const Boton = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

//Salida en pantalla de las estadisticas
const Statistic = ({ text, value }) => <p>{text}{":"}{value}</p>;


//Calcula el total y llama a cada registro de estadistica
const Statistics = ({ clicks }) => {
  const total = clicks.good + clicks.neutral + clicks.bad;

  if (total === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <Statistic text="good" value={clicks.good} />
      <Statistic text="neutral" value={clicks.neutral} />
      <Statistic text="bad" value={clicks.bad} />
    </div>
  );
};

//rendarizado de la app
ReactDOM.render(<App />, document.getElementById("root"));
