import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './header.css'

export default class Header extends Component {

  static propTypes = {
    addTodo:PropTypes.func.isRequired,
    length:PropTypes.number.isRequired, 
  }

  handleKeyup = (event) => {
    if(event.keyCode !== 13) {
      return
    } else {
      if(event.target.value.trim() === '') {
        event.target.value = ''
        return
      } else {  
        this.props.addTodo({
          id: this.props.length + 1, name: event.target.value, done: false
        }) 
        event.target.value = ''        
      }
    }
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyup}/>
      </div>
    )
  }
}
