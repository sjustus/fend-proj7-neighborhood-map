import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    return (
      <li>
        <div className="venue-item">
          <h3 className="venue-name">Venue Name</h3>
          <p className="venu-address">Venue Address</p>
        </div>
      </li>
    )
  }
}

export default ListItem
