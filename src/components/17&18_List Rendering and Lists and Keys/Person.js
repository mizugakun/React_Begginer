import React from 'react'

function Person({person}) {
    return (
        <p>I'm {person.name}, I am {person.age} old, and I know {person.skill}</p>
    )
}

export default Person
