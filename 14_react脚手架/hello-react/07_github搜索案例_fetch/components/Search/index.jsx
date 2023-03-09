import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

  search = async () => {
    const {keyWordElement: {value: keyWord}} = this
    PubSub.publish('update', {isFirst: false, isLoading: true})

    // fetch 原生函数，不再使用xhr发送请求

    // 写法1
    // fetch(`/api1/search/users2?q=${keyWord}`).then(
    //   response => {
    //     return response.json()
    //   }
    // ).then(
    //   response => {console.log('success', response)}
    // ).catch(
    //   (error)=>{console.log(error)}
    // )

    // 写法2  await
    try{
      const response = await fetch(`/api1/search/users?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('update', {isLoading: false, users: data.items})
    } catch(error) {
      console.log('error', error)
      PubSub.publish('update', {isLoading: false, err: error.message})
    }
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
