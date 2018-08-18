import React, { Component } from 'react'

export default class Hero extends Component {
  render() {
    return (
        <div className="g-hero">
        <div className="c-container">
            <div className="c-hero-content c-item t-y-middle">
                <div className="e-hero-title">
                    <h1>
                        Een nieuw perspectief <br /> tegenover Blockchain.
                    </h1>
                    <h2>
                        Onderdeel van de bachelorproef van Thomas Coppein.
                    </h2>
                    <button className="o-button blue--light">Meer info</button>
                </div>
            </div>
        </div>
        </div>
    )
  }
}
