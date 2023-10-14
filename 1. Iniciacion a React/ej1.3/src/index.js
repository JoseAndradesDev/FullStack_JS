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
  
  return <p>Number of excersice {props.total}</p> 
}


const App = () => {
  const course = 'Half Stack application development'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }



  return (
    <div>
      <Header titulo={course} />

      <Content part={part1}/>
      <Content part={part2}/>
      <Content part={part3}/>
      
      <Total total= {part1.exercises+part2.exercises+part3.exercises} />

    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))