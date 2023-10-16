import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1>{props.titulo}</h1>
}

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Content = (props) => {
  return  <Part name={props.part.name} exercises={props.part.exercises}/>
}

const Total = (props) => {
  let total=0;
  props.part.forEach(element => {
    total+=element.exercises;
  });
  return <p>Number of excersice {total}</p> 
}


const App = () => {
  const course = 'Half Stack application development'
  
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }

  ]



  return (
    <div>
      <Header titulo={course} />

      <Content part={parts[0]}/>
      <Content part={parts[1]}/>
      <Content part={parts[2]}/>
      
      <Total part={parts}/>

    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))