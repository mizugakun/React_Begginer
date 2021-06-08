import React, { Component } from 'react'

class ClickCounterTwo02 extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
           <button onClick={incrementCount}>Click {count} times</button>
        )
    }
}
export default ClickCounterTwo02
