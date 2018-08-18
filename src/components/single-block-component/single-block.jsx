import React, { Component } from 'react'
import sha256 from 'sha256'
import InputMask from 'react-input-mask'


export default class SingleBlock extends Component {
    constructor (props) {
        super(props)
        this.state = {
          timestamp: '',
          magicNumber: '0xD9B4BEF9',
          nonce: '0',
          data: '',
          hashedData: '',
          difficulty: '1',
          minedHash: ''
        }
      }

      magicNumber = ({target}) => {
        this.setState({magicNumber: target.value});
      }
      nonce = ({target}) => {
        this.setState({nonce: target.value});
      }
      data = ({target}) => {
          this.setState({data: target.value});
          this.setState({timestamp: new Date().getTime()})
      }
      difficulty = ({target}) => {
        this.setState({difficulty: target.value});
    }
      checkFunction = () => {
        const {magicNumber } = this.state
        if (magicNumber.match(/^0[xX][0-9a-fA-F]+$/)) {
            return true
        } else {
            return false
        } 
      }
      
      getEncryptedData = () => {
        const { data } = this.state
        const { magicNumber} = this.state
        const { nonce } = this.state
        const { timestamp } = this.state

        if(data.trim() === '') return ''
        return sha256((magicNumber + timestamp) + data + nonce )
      }

      mineBlock = (hashedData) => {
        const {magicNumber} = this.state
        const {data} = this.state
        const {difficulty} = this.state
        const {timestamp} = this.state
        let {nonce} = this.state
        let minedHash = hashedData
        while(minedHash.substring(0, parseInt(difficulty, 10)) !== Array(parseInt(difficulty)+1).join("0")) {
            nonce++;
            minedHash = sha256((magicNumber + timestamp + data + nonce ))
            console.log(minedHash);
        }

        this.setState({minedHash: minedHash});
        return minedHash;
      }

  render () {
    const { magicNumber, nonce, data, difficulty, minedHash }  = this.state
    const hashedData = this.getEncryptedData()
    const timestamp = new Date().getTime();
    return ( 
        <div className="c-container">
            <div className="c-block">
                <div className="c-block-input t-flex-column t-y-middle">
                    <label>Magic Number</label>
                    <InputMask mask="0x********" maskChar={null} value={magicNumber} onChange={this.magicNumber} />

                    {/* <input value={magicNumber} maxLength="10" placeholder="Vul het Magic Number in." type="text" onChange={this.magicNumber} style={{borderColor: this.checkFunction() ? '' : 'red'  }}/> 
                    {!this.checkFunction() ? ( 
                        <div className="g-error">
                            <p><strong>Error:</strong> Gelieve een hexadecimale correcte waarde in te geven. (0xD9B4BEF9) </p>
                        </div>)
                        : (
                        <div></div>
                        )
                    } */}
                </div>
                <div className="c-block-input t-flex-column t-y-middle">
                    <label>Nonce</label>
                    <input value={nonce} placeholder="Vul hier de nonce in." pattern="\d*" maxLength="10" onChange={this.nonce} />
                </div>
                <div className="c-block-input t-flex-column t-y-middle">
                    <label>Moeilijkheid</label>
                    <input value={difficulty} placeholder="Vul hier de moeilijkheid in." min="0" max="10" onChange={this.difficulty} />
                </div>
                <div className="c-block-input t-flex-column t-y-middle">
                    <label>Timestamp</label>
                    <input value={timestamp} disabled/>
                </div>
                <div className="c-block-input t-flex-column t-y-middle">
                    <label>Data</label>
                    <input value={data} placeholder="Vul uw tekst in." type="text" onChange={this.data}/> 
                </div>
                <div className="c-block-input t-flex-column t-y-middle">
                    <label>Hash</label>
                    <input value={hashedData} disabled type="text"/> 
                </div>
                <div className="c-block-input t-flex-column t-y-middle">
                    <label>Mined Hash</label>
                    <input value={minedHash} disabled type="text"/> 
                </div>
                <div className="c-block-input t-flex-column t-y-middle">
                    <button className="o-button blue--light" onClick={() => this.mineBlock(hashedData)}>Mine Block</button>
                </div>
            </div>
        </div>
    )
  }
}

