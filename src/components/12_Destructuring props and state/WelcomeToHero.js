/*
Demonstration for props on class component and deconstructuring

!: {props.children} will render the inner component in HelloToHero tag
*/


import React, {Component} from 'react'

// class WelcomeToHero extends component {
//     render () {
//         return <h3>Welcome Sam</h3>
//     }
// }

/* without using deconstructuring
class WelcomeToHero extends Component {
    render () {
        return <p>Welcome {this.props.name}, a.k.a {this.props.heroName}</p>
    }
}
*/

/** useing deconstructuring */
class WelcomeToHero extends Component {
    render () { 
        // ** deconstructuring state (not in this function) **
        // const {state1, state2} = this.state

        const {name, heroName} = this.props
        return <p>Welcome {name}, a.k.a {heroName}</p>
    }
}

export default WelcomeToHero