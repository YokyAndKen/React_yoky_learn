import React, { Component } from 'react'
import axios from 'axios'
import Search from './components/Search/index'
import List from './components/List/index'

export default class App extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/> 
        <List {...this.state}/>
      </div>
    )
  }
}
