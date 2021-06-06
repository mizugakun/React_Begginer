import React, { Component } from 'react'

class HoverCount extends Component {
        
    // duplicated
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    // duplicated
    incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                <h2 onMouseOver={this.incrementCount}>Hover {this.state.count} times</h2>
            </div>
        )
    }
}

export default HoverCount
