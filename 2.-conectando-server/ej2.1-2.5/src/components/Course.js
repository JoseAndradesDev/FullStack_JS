
const Header = ({tittle}) => <h3>{tittle}</h3>

const Content = ({parts}) => (
    parts.map(({name, exercises, id}) => <Part key={id} name={name} exercises={exercises} /> ) 
)


const Part = ({name,exercises}) => <li>{name} {exercises}</li>


const Total = ({parts}) => {
    const total = parts.reduce((prev, actual) => {
        return prev + actual.exercises;
      }, 0);
    
    
  
    return <p>Number of exercises {total}</p>;
  };



const Course = ({ parts, tittle}) => {
    
    return (
        <div>
            <Header tittle={tittle} />
            <ul>
                <Content parts={parts}/>
                <Total parts={parts}/>
            </ul>
            
           
    
        </div>
    );
};

export default Course;