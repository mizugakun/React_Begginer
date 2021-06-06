import React from 'react'
import Person from './Person'

// function NameList() {
//     const names = ['Bruce', 'Clark', 'Diana']

//     return (
//         <div>
//             <p>{names[0]}</p>
//             <p>{names[1]}</p>
//             <p>{names[2]}</p>
//         </div>
//     )
// }

// use javascript map function to deal with interarion
// function NameList() {
//     const names = ['Bruce', 'Clark', 'Diana']
//     const nameList = names.map(name => <p>{name}</p>)
//     return <div>{nameList}</div>
// }




/* better code */
/* warning:
Each child in a list should have a unique "key" prop.
Check the render method of `NameList`. 
*/
// function NameList() {
//     const persons = [
//         {
//             id: 1,
//             name: 'Bruce',
//             age: 30,
//             skill: 'React'
//         },
//         {
//             id: 2,
//             name: 'Clark',
//             age: 25,
//             skill: 'Angular'

//         },
//         {
//             id: 3,
//             name: 'Diana',
//             age: 200,
//             skill: 'Vue'
//         }
//     ]
//    // const personList = persons.map(person => <p>I'm {person.name}, I am {person.age} old, and I know {person.skill}</p>)
//     const personList = persons.map(person => <Person person={person} />)
//     return <div>{personList}</div>
// }

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'

        },
        {
            id: 3,
            name: 'Diana',
            age: 200,
            skill: 'Vue'
        }
    ]

    /* key prop could be anything as long as it is unique in the list*/
    /* key prop cannot be render in the child component */ 
    /* do not use key prop to render any data */
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return <div>{personList}</div>
}

export default NameList
