import React, { Component } from 'react'
import axios from 'axios'
import Search from './components/Search/index'
import List from './components/List/index'

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <Search /> 
        <List />
      </div>
    )
  }
}
