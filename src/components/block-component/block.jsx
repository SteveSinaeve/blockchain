import React, { Component } from 'react'
import SingleBlock from './../single-block-component/single-block'
import Header from './../header-component/header'

export default class Block extends Component {
  render() {
    return (
      <div>
        <Header title="Block" description="Op deze pagina wordt er een woordje meer uitleg gegeven over cryptografie" />
        <SingleBlock />
      </div>
    )
  }
}
