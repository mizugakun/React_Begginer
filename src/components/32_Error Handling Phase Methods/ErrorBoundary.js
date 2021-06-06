import React, { Component } from 'react'


/* 
to make this component as a error boundary, we need to define the methods:
    1. static getDerivedStateFromError(error)
    2. componentDidCatch(error, info)
*/

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    
    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }
    
    // if there is an error, return 'Something went wrong', else return children component which is a component that supposesd to be rendered
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
            
        }
        return this.props.children
    }
}

export default ErrorBoundary
