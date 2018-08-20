import React, { Component } from 'react'
import BlockchainBlock from './../blockchain-block-component/blockchain-block'
import Header from './../header-component/header'


export default class Blockchain extends Component {
    constructor (props) {
        super(props)
        this.state = {
          hash1 : false
        }
    }
    
    minedHash = (val, name) => {
        this.setState({[name]: val})
    }

  render() {
      const {hash1} = this.state
    return (
      <div>
        <Header title="Blockchain" description="Op deze pagina wordt er een woordje meer uitleg gegeven over blockchain." />
        <div className="c-container">
            <div className="c-blockchain-slider t-flex-row">
            <BlockchainBlock minedBlock={(val) => this.minedHash(val, 'hash1')} />
            { hash1 ?
            (<BlockchainBlock previousHash={hash1} minedBlock={((val) => this.minedHash(val, 'hash2'))}/>)
            : (<div></div>)
            }
            </div>
        </div>
      </div>
    )
  }
}
