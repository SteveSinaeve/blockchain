import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ImageNavigation extends Component {
  render() {
    return (
      <div className="c-imagenavigation t-flex-row c-container">
      <Link className="c-icon t-center t-flex-column" to={`/cryptografie`}>
          <img src="/images/Crypto.svg" alt="Crypto"></img>
          <h2>Cryptografie</h2>
      </Link>
      <Link className="c-icon t-center t-flex-column" to={`/block`} >
          <img src="/images/Crypto.svg" alt="Crypto"></img>
          <h2>Block</h2>
        </Link>
        <Link className="c-icon t-center t-flex-column" to={`/encrypt`} >
          <img src="/images/Crypto.svg" alt="Crypto"></img>
          <h2>Blockchain</h2>
        </Link>
      </div>
    )
  }
}