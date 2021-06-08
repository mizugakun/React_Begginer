import React, { Component } from 'react'

class HoverCountTwo extends Component {
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
            <h1 onMouseOver={this.incrementCount}>Hover {this.state.count} Times</h1>
        )
    }
}

export default HoverCountTwo
