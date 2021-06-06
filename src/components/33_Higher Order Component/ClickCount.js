import React, { Component } from 'react'

class ClickCount extends Component {
    
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
                <button onClick={this.incrementCount}> Click {this.state.count} times</button>
            </div>
        )
    }
}

export default ClickCount
