import React from 'react';
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'


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
        
        <Total parts={course.parts}/>
  
      </div>
    )
  }

  export default App;