import React,{Component} from 'react'
import './App.css'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

class App extends Component{

  // 初始化状态
  state = {
    todos: [
      {id: '1', name: 'test001', done: true},
      {id: '2', name: 'test002', done: true},
      {id: '3', name: 'test003', done: false},
      {id: '4', name: 'test004', done: false},
    ]
  }

  // 如果子想给父传东西，需要父给子传递一个函数，需要传递信息的时候调用这个函数
  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }

  updateTodo = (id, status) => {
    const {todos} = this.state;
    const newTodo =  todos.map((todo)=>{
      if(todo.id === id){
        return {...todo,done:status};
      }
      return todo;
  })
    this.setState({todos:newTodo})
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({todos: newTodos})
  }

  checkAllTodo = (status) => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      return {...todo, done: status}
    })
    this.setState({todos: newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter(todo => {
      return todo.done === false
    })
    this.setState({todos: newTodos})
  }

  render(){
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} length={this.state.todos.length}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}
export default App