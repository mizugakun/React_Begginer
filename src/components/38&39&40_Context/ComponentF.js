import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <div>Fomponent F. Hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

// example for multiple contexts
/* 
class ComponentF extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <UserContext.Consumer>
                        {username => (
                            <ProfilePage user={username} theme={theme} />
                        )}
                    </UserContext.Consumer>
                )}    
            </ThemeContext.Consumer>
        )
    }
}





*/
export default ComponentF
