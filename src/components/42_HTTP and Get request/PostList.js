import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMsg: ""
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: "error occur"})
            })
    }
    
    render() {
        // deconstruct the state property
        const {posts, errorMsg} = this.state
        
        // render fetched data
        return (
            <div>
                {
                     posts.length ?
                     posts.map(post =>{
                        return (
                            <div key={post.id}>
                                <div>{[post.title]}</div>
                            </div>
                        )
                     })
                     : null
                }
                { errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList
