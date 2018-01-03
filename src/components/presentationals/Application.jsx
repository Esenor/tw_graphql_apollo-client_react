import React, { Component } from 'react'
import CustomersList from './CustomersList.jsx'

class Application extends Component {
  render () {
    return (
      <div className="App">
        <CustomersList customersList={this.props.listCustomers}/>
      </div>
    )
  }
}

export default Application
