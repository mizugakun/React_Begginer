import React, { Component } from 'react'
import withCounter03 from './withCounter03'

class ClickCount03 extends Component {
    
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

export default withCounter03(ClickCount03, 3)
