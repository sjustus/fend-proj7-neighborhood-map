import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    return (
      <li>
        <div className="venue-item">
          <h3 className="venue-name">{this.props.venue.venue.name}</h3>
          <p className="venu-address"> {this.props.venue.venue.location.address}</p>
        </div>
      </li>
    )
  }
}

export default ListItem
