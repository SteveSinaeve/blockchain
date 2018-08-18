import React, { Component } from 'react'
import sha256 from 'sha256'


export default class SHA extends Component {
    constructor (props) {
        super(props)
        this.state = {
          message: ''
        }
    }

    changeValue = ({target}) => {
        this.setState({message: target.value})
      }
    
      getEncryptedMessage = () => {
        const { message } = this.state
        if(message.trim() === '') return ''
        return sha256(message)
      }

    render() {
        const hashed = this.getEncryptedMessage()
        const { message } = this.state
        return (
        <div className="c-sha c-container">
            <div className="t-flex-column c-sha-input">
                <label>Tekst</label>
                <input value={message} placeholder="Vul uw tekst in." onChange={this.changeValue}/> 
            </div>
            <div className="t-flex-column c-sha-input">
                <label>Hash</label>
                <input value={hashed} disabled /> 
            </div>
            
        </div>
        )
    }
}
