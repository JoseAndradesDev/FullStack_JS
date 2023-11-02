const Persons = ({personsToShow}) => {
return (
    <div>
        {personsToShow.map((person) => (
            <div key={person.name}>{person.name+" "}<strong>{" - "+person.number}</strong></div>
        ))}
    </div>
)

}

export default Persons;