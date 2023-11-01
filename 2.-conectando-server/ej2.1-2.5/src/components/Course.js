
const Header = ({tittle}) => <h2>{tittle}</h2>

const Content = ({parts}) => (
    parts.map(({name, exercises, id}) => <Part key={id} name={name} exercises={exercises} /> ) 
)


const Part = ({name,exercises}) => <li>{name} {exercises}</li>


const Total = ({parts}) => {
    const total = parts.reduce((prev, actual) => {
        return prev + actual.exercises;
      }, 0);
    
    
  
    return <p><strong>Number of exercises {total}</strong></p>;
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