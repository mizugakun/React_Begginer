import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'
class ComponentE extends Component {
    render() {
        return (
            <div>
              Component E context {this.context}
              <ComponentF />
            </div>
        )
    }
}

// using context property to pass the context value
// only able to read one context. not suitable to the scenario where need to receive values from different multiple contexts
ComponentE.contextType = UserContext

export default ComponentE
