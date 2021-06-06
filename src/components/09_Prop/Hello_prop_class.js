import React, { Component } from 'react'

class Hello_prop_class extends Component {
    render() {
        return <p>Welcome {this.props.name}, a.k.a {this.props.heroName}</p>
    }
}

export default Hello_prop_class
