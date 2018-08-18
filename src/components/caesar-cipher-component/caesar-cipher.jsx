import React from 'react';

export default class CaesarCipher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        message: '',
        shift: '0'
    }
  }

  caeserCipher = ({target}) => {
    this.setState({message: target.value});
  }
  caeserCipherShift = ({target}) => {
    this.setState({shift: target.value});
  }

  getCaeserCipher = () => {
    const { message } = this.state
    const { shift } = this.state
    var result = '';

    for (var i = 0; i < message.length; i ++) {
        var character = message[i];
        if (character.match(/[a-z]/i)) {
              var code = message.charCodeAt(i);
              var shiftInt = parseInt(shift, 10);
              if (code >= 65 && code <= 90 && shiftInt >= 0)
              {
                character = String.fromCharCode(((code - 65 + shiftInt) % 26) + 65);
              }
              else if (code >= 97 && code <= 122 && shiftInt >= 0) {
                character = String.fromCharCode(((code - 97 + shiftInt) % 26) + 97);
              }
            }
            result += character;
          }
    return result;
}
  render() {
    const output = this.getCaeserCipher()
    const { message } = this.state
    const { shift } = this.state
    return (
      <div className="c-caeser c-container">
        <div className="t-flex-row">
          <div className="t-flex-column c-message">
            <label>Tekst</label>
            <input className="c-message-input" value={message} placeholder="Vul uw tekst in." onChange={this.caeserCipher}/>
          </div>
          <div className="t-flex-column c-shift">
            <label>Shift</label>
            <input className="c-shift-input" type="number" value={shift}  min="0" onChange={this.caeserCipherShift}/>
          </div>
        </div>
        <div className="c-output t-flex-column">
          <label>Resultaat</label>
          <input className="c-output-value" value={output} disabled/>
        </div>
      </div>);
  }
}
