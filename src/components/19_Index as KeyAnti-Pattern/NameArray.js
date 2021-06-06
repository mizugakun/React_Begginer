import React from 'react'

/* use index as key props */
/* still have some problem */
/* if the list need to be reorder or be changed, don't use index as key */
function NameArray() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map((name, index) => <p key={index}>{name}</p>)
    return <div>{nameList}</div>
}

export default NameArray
