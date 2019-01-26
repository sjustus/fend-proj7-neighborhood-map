import React, { Component } from 'react'
import ListItem from './ListItem.js'
import escapeRegExp from 'escape-string-regexp'

class Listview extends Component {

  render() {
    // Set a variable to hold venues that will be shown (matches the query)
    let showingVenues
    // Check for a query in the input, if truthy
    if (this.props.query) {
      /* Set variable match to query - use escapeRegExp to escape special characters
       * Filter through venues and for each venue use test() to check for a match against the query
       * Filter though venues, and for each venue
       * Call test() on match to check for a match between the query and venue's name
       * Resource: [State Management - Controlled Components](https://classroom.udacity.com/nanodegrees/nd001/parts/f4471fff-fffb-4281-8c09-2478625c9597/modules/82766b2b-1870-4904-aa90-8ccbe63928c5/lessons/14331e60-a548-4cfb-a326-054545da8927/concepts/fc3f11d3-8779-4d8a-8a23-1cd782f8ddf3)
      */
      const match = new RegExp(escapeRegExp(this.props.query), 'i')
      showingVenues = this.props.venues.filter((venue) => match.test(venue.venue.name))
      // If no query, just show all venues
    } else {
      showingVenues = this.props.venues
    }

    return (
      <section className="map-listview">
        <div className="map-search-bar">
          <input
            type="text"
            id="search"
            placeholder="Search Locations" value={this.props.query}
            onChange={(event) => {this.props.updateQuery(event.target.value)}}
          />
          <button>Search</button>
        </div>

        <div className="map-search-results">
          <ol>
            {/* Map over showingVenues and display and Listitem for each*/}
            {showingVenues.map((venue, i) => <ListItem venue={venue} key={i} />) }
          </ol>
        </div>
      </section>

    )
  }
}

export default Listview
