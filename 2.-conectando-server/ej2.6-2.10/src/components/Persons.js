const Persons = ({personsToShow}) => {
return (
    <div>
        {personsToShow.map((person) => (
            <div key={person.name}>{person.name}</div>
        ))}
    </div>
)

}

export default Persons;