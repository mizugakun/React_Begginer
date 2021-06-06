import React from 'react'

const heading = {
    fontsize: '72px',
    color: '#0000FF'
}

function Inline() {
    return (
        <div>
            <p className='error'>test style</p>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
