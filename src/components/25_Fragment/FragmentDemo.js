
import React from 'react'

// function FragmentDemo() {
//     return (
//         <div>
//             <h1>FragmentDemo</h1>
//             <p>lorem</p>
//         </div>
//     )
// }


/* replace enclosing div tag with react fragment */
/* it wiill prevent any extra node from being added to the DOM */
function FragmentDemo() {
    return (
        <React.Fragment>
            <h1>FragmentDemo</h1>
            <p>lorem</p>
        </React.Fragment>
    )
}


export default FragmentDemo
