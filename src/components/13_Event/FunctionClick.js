/* demonstration of event handling on functional component*/

import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log("Button clicked")
    }


    return (
        <div>
            <button onClick={clickHandler}>click</button>
        </div>
    )
}

/* function vs function call */
/* function */
/* <button onClick={clickHandler}>click</button> */
/* */
/* function call */
/* <button onClick={clickHandler()}>click</button> */
/* */
/* important: */
/* we want the handler be a funtion, not a function call */


export default FunctionClick
