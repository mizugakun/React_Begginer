import React, { Component } from 'react'

/* binding in render */
/* troublesome when the project scope is large */
class EventBind01 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        )
    }
}

/* use arrow function in render */
/* have performance issues in some senarios */
class EventBind02 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.clickHandler()}>Click</button>
            </div>
        )
    }
}


/* binding the event in class constructor */
/* recommanded way (in 2018) */
class EventBind03 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

/* class property as arrow function */
/* Bind the event in the function by function arrow */
class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }

    /* !!important!! */
    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }
    

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
export default EventBind


