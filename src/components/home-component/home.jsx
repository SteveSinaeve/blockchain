import React, { Component } from 'react'

// Components
import Hero from './../hero-component/hero'
import TextBlock from './../text-block-component/textBlock'
import ImageNavigation from './../image-navigation-component/image-navigation-component';
// Style
import './home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <TextBlock title="Welkom" body="Lorem ipsum dolor sit amet, nemore regione fabellas ea has, ea saepe graece explicari nam. Id latine integre mel, vim id volutpat dissentiunt. Ei simul debitis fierent duo, labore omnium gloriatur sed ad. Nullam quaestio accommodare cum in, ius cu tritani civibus consulatu. Qui inimicus complectitur id.
Illum augue liber in his. At eirmod maiorum eum, est causae democritum dissentiet in. No facer integre propriae nec. Has justo choro eu. Erat paulo comprehensam his cu, vel expetendis assueverit id, pro id tation inermis concludaturque.
"/>
      <ImageNavigation />
      <TextBlock title="Wat is blockchain?" body="Lorem ipsum dolor sit amet, nemore regione fabellas ea has, ea saepe graece explicari nam. Id latine integre mel, vim id volutpat dissentiunt. Ei simul debitis fierent duo, labore omnium gloriatur sed ad. Nullam quaestio accommodare cum in, ius cu tritani civibus consulatu. Qui inimicus complectitur id.
Illum augue liber in his. At eirmod maiorum eum, est causae democritum dissentiet in. No facer integre propriae nec. Has justo choro eu. Erat paulo comprehensam his cu, vel expetendis assueverit id, pro id tation inermis concludaturque.
"/>

      </div>
    )
  }
}