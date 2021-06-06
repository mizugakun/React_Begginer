/*
Demonstration for props on functional component and deconstructuring

!: {props.children} will render the inner component in HelloToHero tag
*/


import React from 'react'

/* witout using deconstructuring
const HelloToHero = props => {
    console.log(props)
    return (
        <div>
            <p>
                Hello { props.name }, a.k.a { props.heroName }
            </p>
            {props.children}
        </div>
    )
}
*/

/* with deconstructuring the parameter
// cannot use {props.children}
const HelloToHero = ({name, heroName}) => {
    return (
        <div>
            <p>
                Hello { name }, a.k.a { heroName }
            </p>
        </div>
    )
}
*/

/* with deconstructuring in the function body */
const HelloToHero = props => {
    const {name, heroName} = props
    return (
        <div>
            <p>
                Hello { name }, a.k.a { heroName }
            </p>
            {props.children}
        </div>
    )
}
export default HelloToHero