import React, { Component } from 'react'

// class UserGreeting extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              isLoggedIn: true
//         }
//     }
    
    
//     render() {
//         if (this.state.isLoggedIn) {
//             return (
//                 <div>Welcome Sam</div>
//             )
//         } else {
//             return (
//                 <div>Welcome Guset</div>
//             )
//         }
//     }
// }

// class UserGreeting extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              isLoggedIn: true
//         }
//     }
    
    
//     render() {
//         let message
//         if (this.state.isLoggedIn) {
//             message = <div>Welcome Sam</div>
//         } else {
//             message = <div>Welcome Guest</div>
//         }

//         return (
//             <div>{message}</div>
//         )
//     }
// }


/* recommanded */
// class UserGreeting extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              isLoggedIn: false
//         }
//     }
    
    
//     render() {
//        return this.state.isLoggedIn && <div>Welcome Same</div>
//     }
// }


/* recommanded */
class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    
    render() {
        return (
            this.state.isLoggedIn ?
            <div>Welcome Sam</div> :
            <div>Welcome Guest</div>
        )
    }
}

export default UserGreeting
