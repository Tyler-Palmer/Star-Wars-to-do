import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Bounties from './components/Bounties/Bounties'
class App extends Component {
  render() {
    return (
      <div className="background container">
          
          <Switch>
            <Route path='/' component={Bounties}></Route>
          </Switch>
          <div className="secondary-background"></div>
      </div>
    )
  }
}

export default App
