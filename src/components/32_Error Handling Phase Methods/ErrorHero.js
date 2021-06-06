import React from 'react'

function ErrorHero({ heroName }) {
    if (heroName === "Joker") {
        throw new Error('not a hero')
    }

    return (
        <div>
            <h1>{heroName}</h1>
        </div>
    )

}

export default ErrorHero
