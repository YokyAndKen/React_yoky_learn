import React, { Component } from 'react'
import {NavLink, Route} from 'react-router-dom'
import Home from './pages/Home'   //home是路由组件
import About from './pages/About'
import Header from './components/Header'   //header是一般组件
import MyNavLink from './components/MyNavLink'


export default class App extends Component {

  render() {
    return (
    <div>
      <div div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header/>
        </div>
      </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html重，靠a标签跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在react中，靠路由链接实现切换组件 -- 编写路由链接*/}
                <NavLink activeClassName='yoky' className="list-group-item" to="/about">About</NavLink>
                <NavLink activeClassName='yoky' className="list-group-item" to="/home">Home</NavLink>
                <MyNavLink/>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
              </div>
            </div>
          </div>
        </div>

    </div>
    )
  }
}
