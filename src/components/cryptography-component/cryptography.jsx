import React, { Component } from 'react'
import Header from './../header-component/header'
import CaesarCipher from './../caesar-cipher-component/caesar-cipher'
import TextBlock from './../text-block-component/textBlock'
import SHA from './../sha-component/sha'
import Merkle from './../merkle-tree-component/merkle-tree'
import Definition from './../definition-component/defenition'


export default class Cryptography extends Component {
  render() {
    return (
      <div>
        <Header title="Cryptografie" description="Op deze pagina wordt er een woordje meer uitleg gegeven over cryptografie" />
        <TextBlock title="Caesar Cipher" body="Lorem ipsum dolor sit amet, nemore regione fabellas ea has, ea saepe graece explicari nam. Id latine integre mel, vim id volutpat dissentiunt. Ei simul debitis fierent duo, labore omnium gloriatur sed ad. Nullam quaestio accommodare cum in, ius cu tritani civibus consulatu. Qui inimicus complectitur id.
  Illum augue liber in his. At eirmod maiorum eum, est causae democritum dissentiet in. No facer integre propriae nec. Has justo choro eu. Erat paulo comprehensam his cu, vel expetendis assueverit id, pro id tation inermis concludaturque.
  "/>
        <CaesarCipher />
        <TextBlock title="SHA-256" body="Lorem ipsum dolor sit amet, nemore regione fabellas ea has, ea saepe graece explicari nam. Id latine integre mel, vim id volutpat dissentiunt. Ei simul debitis fierent duo, labore omnium gloriatur sed ad. Nullam quaestio accommodare cum in, ius cu tritani civibus consulatu. Qui inimicus complectitur id.
  Illum augue liber in his. At eirmod maiorum eum, est causae democritum dissentiet in. No facer integre propriae nec. Has justo choro eu. Erat paulo comprehensam his cu, vel expetendis assueverit id, pro id tation inermis concludaturque.
  "/>
        <SHA />
        <Definition word="Cipher" definition="Lorem ipsum dolor sit amet, nemore regione fabellas ea has, ea saepe graece explicari nam. Id latine integre mel, vim id volutpat dissentiunt. Ei simul debitis fierent duo, labore omnium gloriatur sed ad. Nullam quaestio accommodare cum in, ius cu tritani civibus consulatu. Qui inimicus complectitur id." />
        <TextBlock title="Merkle Tree" body="Lorem ipsum dolor sit amet, nemore regione fabellas ea has, ea saepe graece explicari nam. Id latine integre mel, vim id volutpat dissentiunt. Ei simul debitis fierent duo, labore omnium gloriatur sed ad. Nullam quaestio accommodare cum in, ius cu tritani civibus consulatu. Qui inimicus complectitur id.
  Illum augue liber in his. At eirmod maiorum eum, est causae democritum dissentiet in. No facer integre propriae nec. Has justo choro eu. Erat paulo comprehensam his cu, vel expetendis assueverit id, pro id tation inermis concludaturque.
  "/>
        <Merkle />
      </div>
    )
  }
}
