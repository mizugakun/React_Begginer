import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Sam'
        }

        console.log('LifecycleA constructor')
    }

    chageState = () => {
        console.log('event called')
        this.setState({
            name: "Som"
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <p>LifeCycleA</p>
                <button onClick={this.chageState}>Chage state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
