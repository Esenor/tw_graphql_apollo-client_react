import React, { Component } from 'react'

export default class Adress extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.street}</td>
        <td>{this.props.city}</td>
        <td>{this.props.zipcode}</td>
        <td></td>
      </tr>
    )
  }
}
