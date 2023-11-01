import Course from './components/Course'


const App = () => {
  
  const courses = [
    {
      tittle: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      tittle: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
      
  ];

   
    return (
      courses.map( ({id, parts, tittle}) => ( 
        <Course key={id}  parts={parts} tittle={tittle} />      
      ))

    )
  
  }

  export default App;
  
  //