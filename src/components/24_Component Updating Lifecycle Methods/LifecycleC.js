import React, { Component } from 'react'
import LifecycleD from './LifecycleD'
class LifecycleC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Sam'
        }

        console.log('LifecycleC constructor')
    }

    chageState = () => {
        console.log('event called')
        this.setState({
            name: "Som"
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleC getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleC componentDidMount')
    }

    
    /* updating method */
    shouldComponentUpdate() {
        console.log('LifecycleC shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log('LifecycleC getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleC componentDidUpdate')
    }



    render() {
        console.log('LifecycleC render')
        return (
            <div>
                <p>LifeCycleC</p>
                <button onClick={this.chageState}>Chage state</button>
                <LifecycleD />
            </div>
        )
    }
}

export default LifecycleC
