import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {
  render() {
    const {name, id, done} = this.props
    return (
      <li>
        <label>
          <input type="checkbox" defaultChecked={done}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:"none"}}>删除</button>
      </li>
    )
  }
}
