import React from 'react'


// with JSX
// syntax suger for calling React.createElement
const Hello = () => {
    return (
        <h1>Hello Sam</h1>
    )
}

// without JSX
// const Hello = () => {
//     return React.createElement(
//         'div', 
//         {id: 'hello', className: 'dummy'}, 
//         React.createElement('h1', null, 'Hello Sam'))
// }

export default Hello