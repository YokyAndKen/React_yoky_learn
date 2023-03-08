import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {

  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre,current)=>{return pre+(current.done ? 1: 0)}, 0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === todos.length && todos.length!==0 ? true:false} onChange={this.handleCheckAll}/>
        </label>
        <span>
          <span>已完成 {doneCount}</span> / 全部 {todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
