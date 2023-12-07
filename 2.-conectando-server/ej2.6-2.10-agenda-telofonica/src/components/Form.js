const Form = ({ addPerson }) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input required />
        </div>
        <div>
          number: <input required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
