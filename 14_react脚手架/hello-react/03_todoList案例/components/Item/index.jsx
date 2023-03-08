import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './item.css'

export default class Item extends Component {

  static propTypes = {
    deleteTodo:PropTypes.func.isRequired,
    updateTodo:PropTypes.func.isRequired,
  }

  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }

  handleDelete = (id) => {
    this.props.deleteTodo(id)
  }

  render() {
    const {name, id, done} = this.props
    return (
      <li>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{id} - {name}</span>
        </label>
        <button className="btn btn-danger btn-item" onClick={()=>{this.handleDelete(id)}}>删除</button>
      </li>
    )
  }
}
