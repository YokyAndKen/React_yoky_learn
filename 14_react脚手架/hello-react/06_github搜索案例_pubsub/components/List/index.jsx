import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class List extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  componentDidMount() {
    this.token = PubSub.subscribe('update', (msg, data) => {
      console.log(data)
      this.setState(data)
    })
  }

  componentWillUnmount( ) {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users,isFirst,isLoading,err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>SEARCH</h2> : 
          isLoading ? <h2>Loading......</h2> :
          err ? <h2>{err}</h2> :
          users.map(user => {
            return(
              <div key={user.id} className="card">
                <a href="https://github.com/reactjs" target="_blank">
                  <img src="{user.avatar_url}" style={{width: '100px'}}/>
                </a>
                <p className="card-text">{user.login}</p>
              </div>              
            )
          })
        }

      </div>
    )
  }
}
