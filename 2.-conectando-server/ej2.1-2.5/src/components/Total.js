const Total = ({parts}) => {
  let total=0;

  parts.forEach(e => {
    total+=e.exercises;
  });

  return <p>Number of exercises {total}</p> 
}

export default Total;








