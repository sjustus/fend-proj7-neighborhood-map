import React, { Component } from 'react'
import ListItem from './ListItem.js'
import escapeRegExp from 'escape-string-regexp'

class Listview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    }
  }

  updateQuery = (query) => {
    this.setState({query})
    console.log(query)
  }

  render() {
    // Set a variable to hold venues that match the query
    let showingVenues
    // Check for a query in the input, if truthy
    if (this.state.query) {
      /* Wrap query in escapeRegExp to escape out special characters
       * Filter through venues and for each venue use test() to check for a match against the query
       * And set matching venues to variable match
       * Resource: [State Management - Controlled Components](https://classroom.udacity.com/nanodegrees/nd001/parts/f4471fff-fffb-4281-8c09-2478625c9597/modules/82766b2b-1870-4904-aa90-8ccbe63928c5/lessons/14331e60-a548-4cfb-a326-054545da8927/concepts/fc3f11d3-8779-4d8a-8a23-1cd782f8ddf3)
      */
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
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
            placeholder="Search Locations" value={this.state.query}
            onChange={(event) => {this.updateQuery(event.target.value)}}
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
