import React, { Component } from 'react'

class LifecycleD extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Sam'
        }

        console.log('LifecycleD constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleD getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleD componentDidMount')
    }



    /* updating method */
    shouldComponentUpdate() {
        console.log('LifecycleD shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log('LifecycleD getSnapshotBeforeUpdate')
        return null
    }   

    componentDidUpdate() {
        console.log('LifecycleD componentDidUpdate')
    }



    render() {
        console.log('LifecycleD render')
        return (
            <div>
                LifeCycleD
            </div>
        )
    }
}

export default LifecycleD
