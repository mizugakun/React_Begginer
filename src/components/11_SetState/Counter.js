import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
        
    /* UI will not render when the value in teh state change
    ** shouldn't modify the state directly except in the constructor
    ** must call setState to change the value in the state
    increment() {
        this.state.count = this.state.count + 1
        console.log(this.state.count)
    }
    */


    /* The console will be executed earlier than setState
    ** we need to use call back function to make sure of that console.log will be executed later
    increment() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }
    */

    
    /* React will group multiple state calls into a single update for better performance
    ** hence the value in the state will be added by only once
    increment() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('Callback value', this.state.count)
        })
        console.log(this.state.count)
    }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    */

    
    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => {console.log('Callback value', this.state.count)})
    }

    // if the setState will be compute based on previous state,
    // the function will be excueted five times
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>
                    count - {this.state.count}
                </div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementFive()}>Increment Five</button>
            </div>
        )
    }
}

export default Counter
