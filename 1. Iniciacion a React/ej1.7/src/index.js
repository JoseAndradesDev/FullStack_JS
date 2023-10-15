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
      <Header titulo="valoranos" />

      <Button onClick={setGood} text="good" />
      <Button onClick={setNeutral} text="neutral" />
      <Button onClick={setBad} text="bad" />

      <Header titulo="estadistica" />

      <Statistics clicks={clicks} />
    </div>
  );
};


//Creacion de componentes
const Header = ({ titulo }) => <h1>{titulo}</h1>;

//Comp. para botones que define su onclick
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

//Salida en pantalla de las estadisticas
const Statistic = ({ text, value }) => <p>{text}{":"}{value}</p>;


//Calcula propiedades y llama a cada registro de estadistica
const Statistics = ({ clicks }) => {
  const total = clicks.good + clicks.neutral + clicks.bad;
  const average = (clicks.good - clicks.bad)/total
  const positive = (clicks.good*100)/total + " %"

  if (total === 0) {
    return <div>Porfavor deja una resena</div>;
  }

  return (
    <div>
      <Statistic text="good" value={clicks.good} />
      <Statistic text="neutral" value={clicks.neutral} />
      <Statistic text="bad" value={clicks.bad} />
      <Statistic text="total" value={total} />
      <Statistic text="average" value={average} />
      <Statistic text="positive" value={positive} />
    </div>
  );
};

//rendarizado de la app
ReactDOM.render(<App />, document.getElementById("root"));
