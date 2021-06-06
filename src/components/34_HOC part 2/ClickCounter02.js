import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCount02 extends Component {
    
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
                <button onClick={func}> 
                    {name} click {count} times
                </button>
            </div>
        )
    }
}

export default withCounter(ClickCount02)
