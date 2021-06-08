import React, { Component } from 'react'

class HoverCountTwo02 extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <h1 onMouseOver={incrementCount}>Hover {count} Times</h1>
        )
    }
}
export default HoverCountTwo02
