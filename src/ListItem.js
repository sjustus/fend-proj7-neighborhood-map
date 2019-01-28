import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    return (
      <li className="venue-item">
        <h3 className="venue-name">{this.props.venue.venue.name}</h3>
        <p className="venue-address"> {this.props.venue.venue.location.address}</p>        
      </li>
    )
  }
}

export default ListItem
