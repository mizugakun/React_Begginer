/* demonstration of event handling on class component*/

import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler() {
        console.log("click the button")
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>click me</button>
            </div>
        )
    }
}

export default ClassClick
