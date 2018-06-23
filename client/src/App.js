import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import subscribeToTime from './api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { timestamp: '00:00:00' }
    subscribeToTime((err, timestamp) => {
      this.setState({ timestamp })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Welcome to React </h2>
        </div>
        <p className="App-intro">Current Time is {this.state.timestamp} </p>
      </div>
    )
  }
}

export default App
