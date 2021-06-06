import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            username: '',
            comments:'',
            topic: 'React'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleTextareaChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {usernamem, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input 
                        type='text' 
                        value={usernamem} 
                        onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                        value={comments}
                        onChange={this.handleTextareaChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div>
                {/* <div>
                    <p>{this.state.username}</p>
                    <p>{this.state.comments}</p>
                    <p>{this.state.topic}</p>
                </div> */}
                <button>submit</button>
            </form>
        )
    }
}

export default Form