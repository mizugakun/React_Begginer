import React, { Component } from 'react'
import withCounter03 from './withCounter03'

class HoverCount03 extends Component {

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

export default withCounter03(HoverCount03, 5)
