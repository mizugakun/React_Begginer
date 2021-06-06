import React from 'react'

// use arrow funtion to pass the parameters to the parent component
function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
