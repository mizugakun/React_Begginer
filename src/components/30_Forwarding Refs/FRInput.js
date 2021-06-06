import React from 'react'

/* 
    we need to foward the ref to othis component from the parent
    need a new way to construct the functional component
    -> useing fowardRef() method in React library 
    
    (rarely used)
*/

// React.forwardRef() will be assiged to the constant
// React.forwardRef() takes a component in as the parameter. eg, React.forwardRef(SomeComponent)
// the component as parameter in the React.forwardRef() method will recieve Ref as th sectond parameter
// attach ref from the parent component into native input element
// ==> the ref from the parent will be foward to the native input element

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
})

export default FRInput
