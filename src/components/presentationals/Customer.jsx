import React, { Component } from 'react'
import AdressesList from './AdressesList.jsx'

export default class Customer extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.mail}</td>
        <td><AdressesList AdressesList={this.props.addresses}/></td>
      </tr>
    )
  }
}
