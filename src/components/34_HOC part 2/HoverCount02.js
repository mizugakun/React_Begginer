import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCount02 extends Component {
        
    // duplicated
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }

    // duplicated
    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {count: prevState.count + 1}
    //     })
    // }

    render() {
        const {name, count, func} = this.props
        return (
            <div>
                <h2 onMouseOver={func}>
                    {name} hover {count} times
                </h2>
            </div>
        )
    }
}

export default withCounter(HoverCount02)
