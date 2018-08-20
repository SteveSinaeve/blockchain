import React, { Component } from 'react'
import sha256 from 'sha256'
import InputMask from 'react-input-mask'

export default class BlockchainBlock extends Component {
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
        const { previousHash } = this.props

        if(data.trim() === '') return ''
        const hash = typeof previousHash === 'string' ? previousHash : ''
        return sha256((magicNumber + timestamp) + data + nonce + hash )
      }

      mineBlock = (hashedData) => {
        const { minedBlock } = this.props
        const {magicNumber} = this.state
        const {data} = this.state
        const {difficulty} = this.state
        const {timestamp} = this.state
        let {nonce} = this.state
        let minedHash = hashedData
        while(minedHash.substring(0, parseInt(difficulty, 10)) !== Array(parseInt(difficulty)+1).join("0")) {
            nonce++;
            minedHash = sha256((magicNumber + timestamp + data + nonce ))
        }

        this.setState({minedHash: minedHash});
        minedBlock(minedHash);
        return minedHash;
      }

    render() {
        const { magicNumber, nonce, data, difficulty, minedHash }  = this.state
        const { previousHash } = this.props
        const hashedData = this.getEncryptedData()
        const timestamp = new Date().getTime();
    return (
        <div className="c-block-small">
            <div className="c-block-input t-flex-column t-y-middle">
                    <label>Magic Number</label>
                    <InputMask mask="0x********" maskChar={null} value={magicNumber} onChange={this.magicNumber} />
                </div>
                <div className="c-block-input t-flex-column">
                    <label>Nonce</label>
                    <input value={nonce} placeholder="Vul hier de nonce in." pattern="\d*" maxLength="10" onChange={this.nonce} />
                </div>
                <div className="c-block-input t-flex-column">
                    <label>Moeilijkheid</label>
                    <input value={difficulty} placeholder="Vul hier de moeilijkheid in." min="0" max="10" onChange={this.difficulty} />
                </div>
                <div className="c-block-input t-flex-column">
                    <label>Timestamp</label>
                    <input value={timestamp} disabled/>
                </div>
                <div className="c-block-input t-flex-column ">
                    <label>Data</label>
                    <input value={data} placeholder="Vul uw tekst in." type="text" onChange={this.data}/> 
                </div>
                <div className="c-block-input t-flex-column">
                    <label>Hash</label>
                    <input value={hashedData} disabled type="text"/> 
                </div>
                {previousHash ? 
                (
                <div className="c-block-input t-flex-column">
                    <label>Previous Hash</label>
                    <input value={previousHash} disabled type="text"/> 
                </div> 
                ) : (
                    <div></div>
                )
                }
                <div className="c-block-input t-flex-column">
                    <label>Mined Hash</label>
                    <input value={minedHash} disabled type="text"/> 
                </div>
                <div className="c-block-input t-flex-column">
                    <button className="o-button blue--light" onClick={() => this.mineBlock(hashedData)}>Mine Block</button>
                </div>
            </div>
    )
  }
}
