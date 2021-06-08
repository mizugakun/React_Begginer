import React, { Component } from 'react'

// this is a "container component" where we implement the common functionality
// which is the state along with the count method
class NewCounter_children extends Component {
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
            <div>
                {this.props.children(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default NewCounter_children
