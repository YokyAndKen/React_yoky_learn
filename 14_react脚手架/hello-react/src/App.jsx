import React,{Component} from 'react'
import './App.css'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

class App extends Component{

  // 初始化状态
  state = {
    todos: [
      {id: '001', name: 'test001', done: true},
      {id: '002', name: 'test002', done: true},
      {id: '003', name: 'test003', done: false},
      {id: '004', name: 'test004', done: false},
    ]
  }


  render(){
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header/>
          <List todos={todos}/>
          <Footer/>
        </div>
      </div>
    )
  }
}
export default App