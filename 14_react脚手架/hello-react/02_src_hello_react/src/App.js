

// 这里不是解构赋值，但是可以这样写，用了多种暴露的形式
import React,{Component} from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'
// 创建‘外壳’组件App


// 创建并暴露App组件
class App extends Component{
  render(){
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}
export default App