import React from 'react'
import './myStyle.css'
function StyleSheet({primary}) {
    
    let className = primary? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>StyleSheet</h1>
        </div>
    )
}

export default StyleSheet
