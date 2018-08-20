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
        <TextBlock title="Caesar Cipher" body="Cryptografie is niet enkel bij blockchain belangrijk. Het gebruik dateert al van lang geleden. Zo kunnen we als voorbeeld de Caesar Cipher bekijken. De naam verwijst Julius Caesar die deze encryptiemethode gebruikte om te communiceren met zijn veldheren."/>
        <CaesarCipher />
        <TextBlock title="SHA-256" body="Secure Hashing Algorithm 256, dit is een onderdeel van de SHA-familie. Deze verzameling is ontworpen door de Amerikaanse National Security Agency.SHA-256 is ook het algoritme waar Bitcoin en vele andere cryptocurrency gebruik van maken."/>
        <SHA />
        <TextBlock title="Merkle Tree" body="Een Merkle tree of een hash tree is een soort datastructuur. Deze structuur is een fundamenteel onderdeel van de blockchain. Het werd gepatenteerd door Ralph Merkle in 1979."/>
        <Merkle />
      </div>
    )
  }
}
