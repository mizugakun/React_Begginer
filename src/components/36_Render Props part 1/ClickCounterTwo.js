import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    // duplicate
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    // duplicate
    incrementCount = () => {
        this.setState (prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return (
           <button onClick={this.incrementCount}>Click {this.state.count} times</button>
        )
    }
}

export default ClickCounterTwo
