import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  //Definicion de los estados
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVotes] = useState(0);
  const [votos, setVote] = useState(Array(6).fill(0));

  //Data
  const anecdotes = [
    "A mayor dolor, hazlo más a menudo.",
"Agregar personal a un proyecto de software atrasado lo retrasa aún más.",
"El primer 90 por ciento del código representa el primer 90 por ciento del tiempo de desarrollo... El 10 por ciento restante del código representa el otro 90 por ciento del tiempo de desarrollo.",
"Cualquier tonto puede escribir código que una computadora pueda entender. Los buenos programadores escriben código que los humanos pueden entender.",
"La optimización prematura es la raíz de todo mal.",
"Depurar es el doble de difícil que escribir el código en primer lugar. Por lo tanto, si escribes el código de la manera más ingeniosa posible, por definición, no eres lo suficientemente inteligente como para depurarlo."
  ];

  
 
  //Evento click, asiga un valor random
  const next = () => {
    const random = Math.round(Math.random()*5)
    setSelected(random)
    CalcMostVoted() // renderiza la mas votada siempre que se pase de anecdota
  }

  //Eveto click, anade voto a frase seleccionada
  const clickVote = () => setVote( {...votos, [selected]: votos[selected]+1}/*, CalcMostVoted()*/) //renderiza las anecdotas cuando quiere
  
  //Calcular anecdota con mas votos
  const CalcMostVoted = () => {
    let max = 0

    for(const voto in votos){
      if(votos[voto] > max){
        max = votos[voto]
        setMostVotes(voto)
      }
    }
    

  }
  

  //Renderizado de la aplicacion
  return (
    <div>
      <Titulo text="Frase aleatoria"/>
      <Content anecdotes={anecdotes} votos={votos} selected={selected}/>
      <Button onClick={next} text={"siguiente"}/>
      <Button onClick={clickVote} text={"votar"}/>

      <Titulo text="Frase mas votada"/>
      <Content anecdotes={anecdotes} votos={votos} selected={mostVoted}/>

    </div>
    
  )
};

//Definicion de Componentes

const Titulo = ({text}) => <h3>{text}</h3>

const Content = ({anecdotes, votos, selected}) => {
  
  return (
    
    <div>
      <p>{anecdotes[selected]}</p>
      <p>{votos[selected]+" "}votos</p>
    </div>
    
  )
  

}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;



ReactDOM.render(<App/>, document.getElementById("root"));