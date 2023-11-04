const Form = ({addPerson}) => {
    return (
    <div>
        <form onSubmit={addPerson}>
                
            <div>
            name: <input  required/>
            </div>
            <div>
            number: <input required/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>

        </form>

        <h2>Numbers</h2> 
    </div>
        
    )
}

export default Form;