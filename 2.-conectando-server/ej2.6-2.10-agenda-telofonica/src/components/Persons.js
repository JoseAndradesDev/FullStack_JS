const Persons = ({personsToShow, deletePerson}) => {
    
return (
    <div>
        {personsToShow.map(({name, number, id}) => (
            <div key={name}><p>{name+" "}<strong>{" / "+number}</strong> / <button onClick={ ()=> deletePerson(id)}>delete</button></p></div>
        ))}
      
    </div>
)

}

export default Persons;