import React from 'react'

const Hello_prop_func = props => {
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

export default Hello_prop_func