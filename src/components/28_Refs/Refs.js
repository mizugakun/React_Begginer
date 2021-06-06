import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        
        /* another way to attach the Ref by callback function */
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }
    
    componentDidMount() {
        /* show this.inputRef will hold the reference of DOM node of the input element */
        console.log(this.inputRef)

        if (this.cbRef != null) {
            console.log(this.cbRef)
        }

        /* make browser focus on the text input */
        this.inputRef.current.focus()
    }

    onClickHandler = () => {
        /* show the value holded in the text input */
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                {/* attach this reference to this DOM node in the render method*/}
                <input type='text' ref={this.inputRef}></input>
                <input type='text' ref={this.setCbRef}></input>
                <button onClick={this.onClickHandler}>show input</button>
            </div>
        )
    }
}

export default Refs
