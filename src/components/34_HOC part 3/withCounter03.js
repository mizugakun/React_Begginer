import React from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
    class withCounter extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + incrementNumber}
            })
        }

        // {... this.props}:  Spread Operator
        render() {
            return <WrappedComponent 
                count={this.state.count} 
                func={this.incrementCount}
                {... this.props}
                />
        }
    }

    return withCounter
}

export default withCounter