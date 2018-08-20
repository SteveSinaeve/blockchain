import React, { Component } from 'react'

// Components
import Hero from './../hero-component/hero'
import TextBlock from './../text-block-component/textBlock'
import ImageNavigation from './../image-navigation-component/image-navigation-component';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <div id="welcome">
        <TextBlock title="Welkom" body="Dit werkstuk maakt deel uit van mijn bachelorproef. Op deze webapplicatie kunt u interactieve voorbeelden zien van de Caesar Cipher, de SHA-256 encryptie en de Merkle tree. Op de block pagina is het mogelijk om je eigen block te creëren."/>
        </div>
      <ImageNavigation />
      <TextBlock title="Wat is blockchain?" body="Blockchain is een distributed, decentralized en digital ledger dat gebruikt wordt om transacties op te slaan. Dit allemaal gebeurt over verschillende nodes over de hele wereld. Door de verspreiding van de data is het onmogelijk om data te wijzigen of te verwijderen. Dit zorgt ervoor dat we overal ter wereld de data zonder risico op corrupte wijzigingen kunnen inkijken.
"/>

      </div>
    )
  }
}