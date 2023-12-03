import React from 'react'

const Filter = ({newFilter}) =>
    <div>
        <input onChange={newFilter} placeholder='introduce un pais'/>
    </div>

export default Filter;