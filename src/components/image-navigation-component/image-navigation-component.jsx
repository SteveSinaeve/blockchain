import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SVGInline from "react-svg-inline"

export default class ImageNavigation extends Component {
  render() {
    return (
      <div className="c-imagenavigation t-flex-row c-container">
      <Link className="c-icon t-center t-flex-column" to={`/cryptografie`}>
        <SVGInline className="typography" svg={'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.5 166.9"><defs></defs><g id="Laag_2" data-name="Laag 2"><g id="Laag_1-2" data-name="Laag 1"><g id="Crypto"><path d="M58.4 20.4H24.5a4.7 4.7 0 0 0-3.4 1.5L2.1 44a3.3 3.3 0 0 0-.6 1.9v91a7.2 7.2 0 0 0 7.2 7.1h49.7z" stroke-width="3" stroke-miterlimit="10" stroke="#234595" fill="#fff"/><path d="M22.7 20.8v20.6a3.6 3.6 0 0 1-3.6 3.7H1.5" fill="none" stroke-width="3" stroke-miterlimit="10" stroke="#234595"/><path stroke="#1d1d1b" stroke-width="3" stroke-miterlimit="10" fill="#fff" d="M58.4 166.9V0"/><path class="cls-4" d="M82.7 39.8v-9.2h-18v18h12.9v-8.8h5z"/><path class="cls-5" d="M82.7 39.8v8.7h-5.1v5.2h9v-14h-4z"/><path class="cls-5" d="M77.6 39.8h5.1v8.8h-5.1zM75.2 65.5h22.5v21.6H75.2z"/><path class="cls-4" d="M91.4 62.7h14.4v13.8H91.4zM83 122.9h14.4v13.8H83z"/><path class="cls-5" d="M67.7 112.5H78v9.5H67.7zM101.8 122.3h10.3v9.5h-10.3z"/><path class="cls-4" d="M82.4 104h10.3v9.5H82.4z"/><path class="cls-5" d="M85.5 107h10.3v9.5H85.5z"/><path class="cls-4" d="M99.5 100h3.9v3.6h-3.9zM74.3 124h3.9v3.6h-3.9z"/><path class="cls-5" d="M110.9 57.3h11.3v6.4h-11.3z"/><path class="cls-4" d="M100.3 109.5h4.2v6.4h-4.2zM116.8 67.9h7.2v7.3h-7.2zM95.5 55.7h4.6v4.8h-4.6zM108.2 108.6h6.4v10.8h-6.4z"/><path class="cls-5" d="M92.2 33h4.6v4.8h-4.6zM97.7 40.8h9v9.5h-9z"/><path class="cls-4" d="M88.9 91.2H98v9.6h-9.1z"/><path class="cls-5" d="M109.2 98.7h6.6v6.9h-6.6zM120.9 71.9h6.6v6.9h-6.6z"/><path class="cls-4" d="M103.5 77.6h4.2v4.5h-4.2zM116.5 91.6h3.8v3.8h-3.8z"/><path class="cls-5" d="M109.5 31.2h12.1v12.7h-12.1z"/><path class="cls-4" d="M114.8 37.1h12.1v12.7h-12.1z"/><path class="cls-5" d="M111.7 84.1h7.4v5.5h-7.4zM111.1 107.5h7.4v5.5h-7.4z"/><path class="cls-4" d="M106.1 95.2h6.6v6.9h-6.6z"/><path class="cls-6" d="M19 79h39.4v-7H19c-2.4 0-4.4 1.6-4.4 3.5s2 3.5 4.4 3.5zM40.8 44.6h17.6v-7H40.8c-2.4 0-4.4 1.6-4.4 3.5s2 3.5 4.4 3.5zM19 63.8h39.4v-7H19c-2.4 0-4.4 1.6-4.4 3.5s2 3.5 4.4 3.5zM58.4 117.7H19c-2.4 0-4.4 1.6-4.4 3.5s2 3.5 4.4 3.5h39.4zM19 109.5h39.4v-7H19c-2.4 0-4.4 1.5-4.4 3.5s2 3.5 4.4 3.5zM19 94.2h39.4v-7H19c-2.4 0-4.4 1.6-4.4 3.5s2 3.5 4.4 3.5z"/><path class="cls-7" d="M58.4 166.9V0"/><circle class="cls-7" cx="58.4" cy="84.8" r="25.9" id="Circle"/><g id="Lock" stroke-miterlimit="10"><rect x="50.3" y="81.1" width="16.5" height="12.8" rx="4.5" ry="4.5" stroke-width="2" stroke="#42abe1" fill="#fff"/><path d="M54.8 81.1v-3.9a3.7 3.7 0 1 1 7.5 0v4" stroke-width="2" stroke="#42abe1" fill="none"/><path stroke="#fff" stroke-width=".5" fill="#42abe1" d="M57 85h3.2v5H57z"/></g><path class="cls-5" d="M82.1 133.8h4.6v4.8h-4.6z"/></g></g></g></svg>'} />
        <h2>Cryptografie</h2>
      </Link>
      <Link className="c-icon t-center t-flex-column" to={`/block`} >
          <SVGInline className="block" svg={'<?xml version="1.0" encoding="UTF-8"?><svg viewBox="0 0 162.03 187.1" xmlns="http://www.w3.org/2000/svg"><defs></defs><g data-name="Laag 2"><g data-name="Laag 2"><path d="M0 140.32l81.02 46.78V93.55L0 46.77v93.55z" fill="#223e92"/><path d="M81.02 187.1l81.01-46.78V46.77L81.02 93.55v93.55z" fill="#3855a2"/><path class="cls-3" d="m91.98 108.46l18.58-10.67v-4.42l-18.58 10.67v4.42zm34.08-13.03v4.43l-15.5 8.89-3.08 1.77-15.5 8.9v-4.42l15.5-8.89v-0.01l18.58-10.67zm0 6.93v4.43l-15.5 8.89-3.08 1.77-15.5 8.9v-4.42l15.5-8.89v-0.01l18.58-10.67zm0 6.93v4.43l-15.5 8.89-3.08 1.77-15.5 8.9v-4.42l15.5-8.89v-0.01l18.58-10.67zm10.46 0.71v4.43l-25.89 14.96-3.08 1.77-15.5 8.9v-4.42l15.5-8.89v-0.01l28.97-16.74zm0 6.61v4.43l-25.89 14.96-3.08 1.77-15.5 8.91v-4.43l15.5-8.88v-0.02l28.97-16.74z"/><path class="cls-3" d="M136.52 96.26v4.43l-25.89 14.96-3.08 1.77-15.5 8.9v-4.42l15.5-8.89V113l28.97-16.74zM69.42 108.46L50.84 97.79v-4.42l18.58 10.67v4.42zM35.34 95.43v4.43l15.5 8.89 3.08 1.77 15.5 8.9V115l-15.5-8.89v-.01L35.34 95.43zM35.34 109.29v4.43l15.5 8.89 3.08 1.77 15.5 8.9v-4.42l-15.5-8.89v-.01l-18.58-10.67zM24.88 110v4.43l25.9 14.96 3.08 1.77 15.5 8.9v-4.42l-15.5-8.89v-.01L24.88 110zM24.88 116.61v4.43L50.78 136l3.08 1.77 15.5 8.91v-4.43l-15.5-8.88v-.02l-28.98-16.74zM24.88 96.26v4.43l25.9 14.96 3.08 1.77 15.5 8.9v-4.42l-15.5-8.89V113L24.88 96.26z"/><path d="M162.03 46.77L81.02 0 0 46.77l81.02 46.78 81.01-46.78z" fill="#445ea8"/></g></g></svg>'} />
          <h2>Block</h2>
        </Link>
        <Link className="c-icon t-center t-flex-column" to={`/blockchain`} >
        <SVGInline className="blockchain" svg={'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 246.62 472.53"><defs><linearGradient id="Naamloos_verloop_14" x1="123.31" y1="172.63" x2="123.31" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#2d4e9d"/></linearGradient><linearGradient id="Naamloos_verloop_14-2" x1="196.69" y1="171.17" x2="173.23" y2="137.67" xlink:href="#Naamloos_verloop_14"/><linearGradient id="Naamloos_verloop_14-3" x1="49.93" y1="171.17" x2="73.38" y2="137.67" xlink:href="#Naamloos_verloop_14"/></defs><title>Blockchain_3</title><g id="Laag_2" data-name="Laag 2"><g id="Laag_3" data-name="Laag 3"><polygon class="cls-1" points="0 336.31 123.31 250 246.62 336.31 123.31 422.63 0 336.31"/><polygon class="cls-2" points="246.62 336.31 246.62 386.22 123.31 472.53 123.31 422.63 246.62 336.31"/><polygon class="cls-3" points="0 336.31 0 386.22 123.31 472.53 123.31 422.63 0 336.31"/><polygon class="cls-1" points="0 236.31 123.31 150 246.62 236.31 123.31 322.63 0 236.31"/><polygon class="cls-2" points="246.62 236.31 246.62 286.22 123.31 372.53 123.31 322.63 246.62 236.31"/><polygon class="cls-3" points="0 236.31 0 286.22 123.31 372.53 123.31 322.63 0 236.31"/><polygon class="cls-4" points="0 136.31 123.31 50 246.62 136.31 123.31 222.63 0 136.31"/><polygon class="cls-5" points="246.62 136.31 246.62 186.22 123.31 272.53 123.31 222.63 246.62 136.31"/><polygon class="cls-6" points="173.62 201.52 173.62 205.03 135.97 231.5 135.97 227.99 173.62 201.52"/><polyline class="cls-6" points="135.97 234.04 166.87 212.34 166.87 215.85 135.97 237.55"/><polyline class="cls-6" points="135.97 245.93 190.23 207.73 190.23 211.25 135.97 249.44"/><polyline class="cls-6" points="135.97 240.07 172.15 214.68 172.15 218.19 135.97 243.58"/><polygon class="cls-6" points="173.62 305.98 173.62 309.49 135.97 335.96 135.97 332.45 173.62 305.98"/><polyline class="cls-6" points="135.97 326.34 166.87 304.64 166.87 308.15 135.97 329.86"/><polyline class="cls-6" points="135.97 338.42 190.23 300.23 190.23 303.74 135.97 341.94"/><polyline class="cls-6" points="135.97 344.23 172.15 318.85 172.15 322.36 135.97 347.75"/><polygon class="cls-6" points="173.62 406.09 173.62 409.6 135.97 436.08 135.97 432.56 173.62 406.09"/><polygon class="cls-6" points="173.62 412.14 173.62 415.65 135.97 442.13 135.97 438.61 173.62 412.14"/><polyline class="cls-6" points="135.97 450.21 166.87 428.51 166.87 432.03 135.97 453.73"/><polyline class="cls-6" points="135.97 426.42 190.23 388.23 190.23 391.74 135.97 429.94"/><polyline class="cls-6" points="135.97 444.35 172.15 418.96 172.15 422.48 135.97 447.86"/><polyline class="cls-6" points="135.97 444.35 172.15 418.96 172.15 422.48 135.97 447.86"/><polygon class="cls-7" points="0 136.31 0 186.22 123.31 272.53 123.31 222.63 0 136.31"/><polygon class="cls-8 blockchain-8" points="0 86.31 123.31 0 246.62 86.31 123.31 172.63 0 86.31"/><polygon class="cls-9 blockchain-9" points="246.62 86.31 246.62 136.22 123.31 222.53 123.31 172.63 246.62 86.31"/><polygon class="cls-10 blockchain-10" points="0 86.31 0 136.22 123.31 222.53 123.31 172.63 0 86.31"/></g></g></svg>'} />
          <h2>Blockchain</h2>
        </Link>
      </div>
    )
  }
}