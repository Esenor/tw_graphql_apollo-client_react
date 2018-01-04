import React, { Component } from 'react'
import CustomersList from './CustomersList.jsx'

class Application extends Component {
  render () {
    return (
      <div className="App">
        <section className="header">
          <button onClick={this.props.generateRandomCustomers}>Generate random customers</button>
          <button onClick={this.props.truncateCustomers}>Truncate all customers</button>
          <span>{this.props.listCustomers.length} customer(s) regitered</span>
        </section>
        <section className="content">
          <CustomersList customersList={this.props.listCustomers}/>
        </section>
      </div>
    )
  }
}

export default Application
