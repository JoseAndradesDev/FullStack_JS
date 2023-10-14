import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1>{props.tittle}</h1>
}

const Part = (props) => {
  return <h3>{props.name} {props.exercises}</h3>
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
  
  const course = {
      tittle: 'Half Stack application development',
      
       parts: [
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