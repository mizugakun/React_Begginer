import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParentInput extends Component {
    
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    
    onClickHandler = () => {
        this.inputRef.current.focus()
    }

    // the parent component create Ref and attach it to the child component
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef}/>
                <button onClick={this.onClickHandler}>focus input</button>
            </div>
        )
    }
}

export default FRParentInput