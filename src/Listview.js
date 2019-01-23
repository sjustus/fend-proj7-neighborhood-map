import React, { Component } from 'react'
import ListItem from './ListItem.js'

class Listview extends Component {


  render() {
    return (
      <section className="map-listview">
        <div className="map-search-bar">
          <input type="text" id="search" placeholder="Search Locations"/>
          <button>Search</button>
        </div>

        <div className="map-search-results">
          <ol>
            {this.props.venues.map(venue => <ListItem />) }
          </ol>
        </div>
      </section>

    )
  }
}

export default Listview
