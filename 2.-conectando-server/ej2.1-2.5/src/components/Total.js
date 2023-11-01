const Total = ({ parts }) => {
  let total = 0;

  parts.reduce((prev, actual) => {
    total = total + actual.exercises;
    return total;
  }, 0);

  return <p>Number of exercises {total}</p>;
};

export default Total;
