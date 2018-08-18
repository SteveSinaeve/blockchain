import React, { Component } from 'react'
import sha256 from 'sha256'
import SVGInline from "react-svg-inline"

export default class Merkle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      transactieA: {
        'value': '',
        'hash': ''
      },
      transactieB: {
        'value': '',
        'hash': ''
      },
      transactieC: {
        'value': '',
        'hash': ''
      },
      transactieD: {
        'value': '',
        'hash': ''
      },
      hashAB: '',
      hashCD: '',
      hashABCD: ''
    }
  }

  async changeValue({target}, name) {
    const { value }  = target
    const { [name ] : obj } = this.state
    obj.value =  value;
    if(value.trim() !== '') {
      obj.hash = sha256(value) 
    }
    else {
      obj.hash = ''
    }
    const {hashAB, hashCD, hashABCD } = await this.checkToEncrypt()    
    this.setState({[name] : obj, hashAB, hashCD, hashABCD})
  }

  async checkToEncrypt() {
    const {transactieA, transactieB, transactieC, transactieD } = this.state
    let hashAB = '', hashCD = '', hashABCD
    if(transactieA.hash.trim() !== '' && transactieB.hash.trim() !== '') {
      hashAB = await this.getEncryptedMessage(transactieA.hash, transactieB.hash)
    }
    if(transactieC.hash.trim() !== '' && transactieD.hash.trim() !== '') {
      hashCD = await this.getEncryptedMessage(transactieC.hash, transactieD.hash)
    }
    if(hashAB.trim() !== '' && hashCD.trim() !== '') {
      hashABCD = await this.getEncryptedMessage(hashAB, hashCD)
    }
    return {hashAB, hashCD, hashABCD}
  }

  getEncryptedMessage = (hash1, hash2) => {
    return sha256(`${hash1}${hash2}`)
  }

  render() {
    const { transactieA, transactieB, transactieC, transactieD, hashAB, hashCD, hashABCD } = this.state
    return (
        <div className='c-merkle c-container'>
          <div className="t-flex-row">
            <div className="c-merkle-tree">
            <SVGInline svg={'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.8 161.9"><g data-name="Laag 2"><g data-name="Laag 1"><path d="M52.7 56h48v17h-48z" class="cls-1"/><text class="cls-2" transform="translate(59.7 68)"><tspan class="cls-3">H</tspan> <tspan x="7.2" y="0">ash</tspan></text><text class="cls-4" transform="matrix(.58 0 0 .58 85.4 71.6)">AB</text><path d="M128.4 14.4h48.2v17h-48.2z" class="cls-1"/><text class="cls-2" transform="translate(130.8 26)"><tspan class="cls-3">H</tspan> <tspan x="7.2" y="0">ash</tspan></text><text class="cls-4" transform="matrix(.58 0 0 .58 156.4 29.7)">ABCB</text><text fill="#1d1d1b" font-family="SFProDisplay-Regular,SF Pro Display" font-size="8" transform="translate(133.2 6.8)">Merkle </tspan> <tspan x="26.7" y="0">Root</tspan></text><path d="M11.7 98.2h48v17h-48z" class="cls-1"/><text class="cls-2" transform="translate(20.7 109.4)"><tspan class="cls-3">H</tspan> <tspan x="7.2" y="0">ash</tspan></text><text class="cls-4" transform="matrix(.58 0 0 .58 46.3 113)">A</text><path d="M93.7 98.2h48v17h-48z" class="cls-1"/><text class="cls-2" transform="translate(102.5 110)"><tspan class="cls-3">H</tspan> <tspan x="7.2" y="0">ash</tspan></text><text class="cls-7" transform="matrix(.58 0 0 .58 128 114)">B</text><path d="M59.2 106.2h34m-16.5-21v20.5" class="cls-8 h-lineAB"/><path d="M74.2 86l2.5-4.3 2.5 4.3h-5z" class="cls-9 h-arrowAB"/><path d="M202.4 56h48v17h-48z" class="cls-1"/><text class="cls-2" transform="translate(209.2 68)"><tspan class="cls-3">H</tspan> <tspan x="7.2" y="0">ash</tspan></text><text class="cls-4" transform="matrix(.58 0 0 .58 234.8 71.6)">CD</text><path d="M161.5 98.2h48v17h-48z" class="cls-1"/><text class="cls-2" transform="translate(170.3 109.4)"><tspan class="cls-3">H</tspan> <tspan x="7.2" y="0">ash</tspan></text><text class="cls-4" transform="matrix(.58 0 0 .58 196 113)">C</text><path d="M243.5 98.2h48v17h-48z" class="cls-1"/><text class="cls-2" transform="translate(252 110)"><tspan class="cls-3">H</tspan> <tspan x="7.2" y="0">ash</tspan></text><text class="cls-7" transform="matrix(.58 0 0 .58 277.6 114)">D</text><path d="M209 106.2h34m-16.5-21v20.5" class="cls-8 h-lineCD"/><path d="M224 86l2.5-4.3 2.4 4.3H224z" class="cls-9 h-arrowCD"/><path d="M100.2 65.2h102.7m-50.9-21v20.5" class="cls-8 h-lineABCD"/><path d="M149.5 45l2.5-4.4 2.5 4.4h-5z" class="cls-9 h-arrowABCD"/><path d="M2.3 134.9h63.6v17H2.3z" class="cls-1"/><text class="cls-2" transform="translate(5.8 147)"><tspan class="cls-10">T</tspan> <tspan x="5.4" y="0" class="cls-11">r</tspan> <tspan x="8.9" y="0">ansactie A</tspan></text><path d="M34.2 124.3v8" class="cls-8 t-lineA"/><path d="M31.7 125l2.5-4.3 2.4 4.3h-4.9z" class="cls-9 t-arrowA"/><path d="M84.2 134.9h63.6v17H84.2z" class="cls-1"/><text class="cls-2" transform="translate(88 147)"><tspan class="cls-10">T</tspan> <tspan x="5.4" y="0" class="cls-11">r</tspan> <tspan x="8.9" y="0">ansactie B</tspan></text><path d="M116 124.3v8" class="cls-8 t-lineB"/><path d="M113.5 125l2.5-4.3 2.5 4.3h-5z" class="cls-9 t-arrowB"/><path d="M152.3 134.9h63.6v17h-63.6z" class="cls-1"/><text class="cls-2" transform="translate(155.7 147)"><tspan class="cls-10">T</tspan> <tspan x="5.4" y="0" class="cls-11">r</tspan> <tspan x="8.9" y="0">ansactie C</tspan></text><path d="M184.1 124.3v8" class="cls-8 t-lineC"/><path d="M181.6 125l2.5-4.3 2.5 4.3h-5z" class="cls-9 t-arrowC"/><path d="M233.8 134.9h63.6v17h-63.6z" class="cls-1"/><text class="cls-2" transform="translate(237.2 147)"><tspan class="cls-10">T</tspan> <tspan x="5.4" y="0" class="cls-11">r</tspan> <tspan x="8.9" y="0">ansactie D</tspan></text><path d="M265.6 124.3v8" class="cls-8 t-lineD"/><path d="M263.1 125l2.5-4.3 2.5 4.3h-5z" class="cls-9 t-arrowD"/></g></g></svg>'} />
            </div>
            <div className="c-merkle-inputs t-flex-column">
              <div className="c-merkle-input t-flex-column">
                <label>Transactie A</label>
                <input value={transactieA.value} placeholder="Vul uw tekst in." type="text" onChange={(value) => this.changeValue(value, 'transactieA')}/> 
              </div>
              <div className="c-merkle-input t-flex-column">
                <label>Transactie B</label>
                <input value={transactieB.value} placeholder="Vul uw tekst in." type="text" onChange={(value) => this.changeValue(value, 'transactieB')}/> 
              </div>
              <div className="c-merkle-input t-flex-column">
                <label>Transactie C</label>
                <input value={transactieC.value} placeholder="Vul uw tekst in." type="text" onChange={(value) => this.changeValue(value, 'transactieC')}/> 
              </div>
              <div className="c-merkle-input t-flex-column">
                <label>Transactie D</label>
                <input value={transactieD.value} placeholder="Vul uw tekst in." type="text" onChange={(value) => this.changeValue(value, 'transactieD')}/> 
              </div>
            </div>
          </div>
          <div className="t-flex-column">
            <div className="c-merkle-output t-flex-column">
                <label>Hash A</label>
                <input  value={transactieA.hash} disabled/> 
            </div>
            <div className="c-merkle-output t-flex-column">
                <label>Hash B</label>
                <input value={transactieB.hash} disabled/> 
            </div>
            <div className="c-merkle-output t-flex-column">
                <label>Hash C</label>
                <input value={transactieC.hash} disabled/> 
            </div>
            <div className="c-merkle-output t-flex-column">
                <label>Hash D</label>
                <input value={transactieD.hash} disabled/> 
            </div>
            <div className="c-merkle-output t-flex-column">
                <label>Hash AB</label>
                <input value={hashAB} disabled/> 
            </div>
            <div className="c-merkle-output t-flex-column">
                <label>Hash CD</label>
                <input value={hashCD} disabled/> 
            </div>
            <div className="c-merkle-output t-flex-column">
                <label>Hash ABCD (Merkle Root)</label>
                <input value={hashABCD} disabled/> 
            </div>
          </div>
          
        </div>
    )
  }
}

