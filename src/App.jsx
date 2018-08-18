import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/home-component/home';
import Menu from './components/menu-component/menu';
import Block from './components/block-component/block';
import Cryptography from './components/cryptography-component/cryptography';
import AOS from 'aos'

class App extends Component {

  render () {
    return (
      <div>
        <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cryptografie' component={Cryptography} />
        <Route exact path='/block' component={Block} />
      </Switch>
      </div>
    )
  }
}

export default App
