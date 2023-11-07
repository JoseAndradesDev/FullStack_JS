const Persons = ({personsToShow}) => {
    
return (
    <div>
        {personsToShow.map(({name, number}) => (
            <div key={name}>{name+" "}<strong>{" - "+number}</strong></div>
        ))}
    </div>
)

}

export default Persons;