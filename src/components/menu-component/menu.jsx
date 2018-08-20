import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <div className="o-menu t-x-middle">
        <NavLink activeClassName='is-active'  exact={true} to="/">Home</NavLink>
        <NavLink activeClassName='is-active' to="/cryptografie">Cryptografie</NavLink>
        <NavLink activeClassName='is-active' to="/block">Block</NavLink>
        <NavLink activeClassName='is-active' to="/blockchain">Blockchain</NavLink>

      </div>
    )
  }
}
