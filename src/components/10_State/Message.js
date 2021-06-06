/* demonstration of state */

import React, { Component } from 'react'

class Message extends Component {
    
    constructor() {
        // Message extends Components class and hence need to call super() in the costructor
        super()
        
        // create a state object
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
        // setState(): set a new state in the component
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
    return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
        ) 
    }
}

export default Message