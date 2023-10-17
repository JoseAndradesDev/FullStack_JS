import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  //Definicion de los estados
  const [selected, setSelected] = useState(0);
  const anecdotes = [
    "A mayor dolor, hazlo más a menudo.",
"Agregar personal a un proyecto de software atrasado lo retrasa aún más.",
"El primer 90 por ciento del código representa el primer 90 por ciento del tiempo de desarrollo... El 10 por ciento restante del código representa el otro 90 por ciento del tiempo de desarrollo.",
"Cualquier tonto puede escribir código que una computadora pueda entender. Los buenos programadores escriben código que los humanos pueden entender.",
"La optimización prematura es la raíz de todo mal.",
"Depurar es el doble de difícil que escribir el código en primer lugar. Por lo tanto, si escribes el código de la manera más ingeniosa posible, por definición, no eres lo suficientemente inteligente como para depurarlo."
  ];
 
  //Evento click, asiga un valor random
  const click = () => {
    const random = Math.round(Math.random()*5)
    setSelected(random)
  }

  return (
    <div>
      <h3>{anecdotes[selected]}</h3>
      <Button onClick={click} text={"siguiente"}/>
    </div>
    
  )
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;


ReactDOM.render(<App/>, document.getElementById("root"));