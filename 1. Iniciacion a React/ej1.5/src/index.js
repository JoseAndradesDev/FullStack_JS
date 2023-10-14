import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  const tittle= props.tittle;

  return <h1>{tittle}</h1>
}

const Part = (props) => {
  const name = props.name;
  const exercises = props.exercises;

  return <h3>{name} {exercises}</h3>
}

const Content = (props) => {
  const name = props.part.name;
  const exercises = props.part.exercises;

  return  <Part name={name} exercises={exercises}/>
}

const Total = (props) => {
  let total=0;
  props.part.forEach(e => {
    total+=e.exercises;
  });
  return <p>Number of exercises {total}</p> 
}


const App = () => {
  
  const course = {
      tittle: 'Half Stack application development',
      
       parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 20
        },
        {
          name: 'State of a component',
          exercises: 14
        }
    
      ]
  }
      

  
  return (
    <div>
      <Header tittle={course.tittle} />

      <Content part={course.parts[0]}/>
      <Content part={course.parts[1]}/>
      <Content part={course.parts[2]}/>
      
      <Total part={course.parts}/>

    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))