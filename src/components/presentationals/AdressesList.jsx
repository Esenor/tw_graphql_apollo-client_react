import React, { Component } from 'react'
import Adress from './Adress.jsx'

export default class AdressesList extends Component {
  render () {
    const domizedAdressesList = (AdressesList) => {
      return AdressesList.map((adress) => {
        return (<Adress key={adress.id} id={adress.id} street={adress.street} city={adress.city} zipcode={adress.zipcode}/>)
      })
    }
    const domizedRender = () => {
      return (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>street</th>
              <th>city</th>
              <th>zipcode</th>
            </tr>
          </thead>
          <tbody>
            {domizedAdressesList(this.props.AdressesList)}
          </tbody>
        </table>
      )
    }
    let hasAdresses = this.props.AdressesList.length > 0
    return (hasAdresses) ? domizedRender() : (<span>No adresses</span>)
  }
}
