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
      <Header tittle="valoranos" />

      <Button onClick={setGood} text="good" />
      <Button onClick={setNeutral} text="neutral" />
      <Button onClick={setBad} text="bad" />

      <Header tittle="estadistica" />

      <Statistics clicks={clicks} />
    </div>
  );
};


//Creacion de componentes
const Header = ({ tittle }) => <h1>{tittle}</h1>;

//Comp. para botones que define su onclick
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

//Salida en pantalla de cada estadistica
const Statistic = ({ text, value }) => <td><p>{text}{":"}{value}</p></td>;


//Calcula propiedades y llama a cada registro de estadisticas
const Statistics = ({ clicks }) => {
  const total = clicks.good + clicks.neutral + clicks.bad;
  const average = ((clicks.good - clicks.bad)/total).toFixed(2)
  const positive = ((clicks.good*100)/total).toFixed(2) + " %"

  if (total === 0) {
    return <div>Porfavor deja una resena</div>;
  }

  return (
    <div>
       <table>
          <tbody>
            <tr><Statistic text="good" value={clicks.good} /></tr>
            <tr><Statistic text="neutral" value={clicks.neutral} /></tr>
            <tr><Statistic text="bad" value={clicks.bad} /></tr>
            <tr><Statistic text="all" value={total} /></tr>
            <tr><Statistic text="average" value={average} /></tr>
            <tr><Statistic text="positive" value={positive} /></tr>
          </tbody>
        </table>
    </div>
  );
};

//rendarizado de la app
ReactDOM.render(<App />, document.getElementById("root"));