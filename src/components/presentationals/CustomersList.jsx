import React, { Component } from 'react'
import Customer from './Customer.jsx'

export default class CustomersList extends Component {
  render () {
    const domizedCustomersList = (customersList) => {
      return customersList.map((customer) => {
        return (<Customer key={customer.id} id={customer.id} name={customer.name} lastName={customer.lastName} mail={customer.mail} addresses={customer.addresses}/>)
      })
    }
    const domizedRender = () => {
      return (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>lastName</th>
              <th>mail</th>
              <th>addresses</th>
            </tr>
          </thead>
          <tbody>
            {domizedCustomersList(this.props.customersList)}
          </tbody>
        </table>
      )
    }
    let hasCustomers = this.props.customersList.length > 0
    return (hasCustomers) ? domizedRender() : (<span>No customers, <a href="https://github.com/Esenor/tw_graphql" target="blank">run GraphQl server</a></span>)
  }
}
