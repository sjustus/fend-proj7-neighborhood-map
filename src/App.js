import React, { Component } from 'react';
import './App.css';
import Map from './Map.js'
import Header from './Header.js'
import Listview from './Listview.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: []
    }
  }

  componentDidMount() {
    this.getVenues()
  }
  /*
   *Function to call FourSquare API & get coffee venues in Milwaukie
   * Resource: [MDN Web Docs -- Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for how to use Fetch API & [FourSquare API Docs](https://developer.foursquare.com/docs/api)
  */
  getVenues = () => {
    // Store client ID and Secret in variables
    const clientID = "21DS0IL1R3KLXHEZIJGPFOCHKMCCPOB34NDSH2KV4P1MO23P";
    const clientSecret = "4KEIITYLHHKCCSBTNK1ASEQ23B4TFBYAO5P14DZTKHWJEZR3";

    // Use Fetch API to call FourSquare api URL -- Plug in client ID & Secret
    fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${clientID}&client_secret=${clientSecret}&v=20191801&limit=10&near=Milwaukie,OR&query=coffee`)
      // Take response & extract JSON datat
      .then(resp => resp.json())
      // Set state to data from response, then call loadMap
      .then(data => {
        console.log(data.response.groups[0].items)
        this.setState({
          venues: data.response.groups[0].items
        }, this.loadMap());
      })
      // If the API returns an error log a message indicating the error
      .catch(error => {
        console.log(`An error occurred: ${error}`);
      });
  }

  // Function to load Google Maps API script to page and call initmap callback function
  loadMap = () => {
    /*
     * store api key in variable and plug into loadScript
     * idea from [Using Google Map in React Component] (https://stackoverflow.com/questions/48493960/using-google-map-in-react-component)
    */
    const apiKey = 'AIzaSyCJtkfy3qr5FkD3QLKz_YyMCm4igwa3YbA';
    // Load google maps api script to index.html
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`)
    // set window.initMap to this.initMap so that it can be called
    window.initMap = this.initMap;
  }
  /*
   *Refactor initMap function from Google docs app to ES6
   *[Google Maps JavaScript API Overview] (https://developers.google.com/maps/documentation/javascript/tutorial)
  */
  initMap = () => {
    // set google to window.google so that google can be accessed
    const google = window.google
    // create a new map with Milawaukie, OR as inital location
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 45.4465323, lng: -122.6323315},
        zoom: 15
      })

      // map over venues held in state and for each venue
    this.state.venues.map(aVenue => {
      // declare infowindow content
      const contentString = `
        <div class="card">
          <div class="card-header">
            <h3>${aVenue.venue.name}</h3>
          </div>
          <div class="card-main">
            <div class="main-description">
              <p>${aVenue.venue.location.address}</p>
            </div>
          </div>
        </div>
      `

      // create a new infoWindow
      const infowindow = new google.maps.InfoWindow({
        content: contentString
      })
      // create a new marker
      const marker = new google.maps.Marker({
          map: map,
          position: {lat:aVenue.venue.location.lat, lng:aVenue.venue.location.lng},
          id: aVenue.venue.id,
          title: aVenue.venue.name,
        })
        // Add a listener to each marker that triggers an infowindow when clicked
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      })

  }

  render() {
    return (
      <div id="App">
        <Header />

        <main>
          <Listview venues={this.state.venues} getVenues={this.getVenues} />
          <Map venues={this.state.venues} />
        </main>
      </div>
    )
  }
}

export default App;

/*
 * Function that will load the Google Maps API script tag
 * Takes url as parameter -- url will be the Maps script needed
 * Resource: [Udacity | Neighborhood Map [2] - Add Google Maps to React App [Without Any External Components]] (https://www.youtube.com/watch?v=W5LhLZqj76s) for loadScript function
 * And [Making Google Maps Work With React] (https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/) (article) which references the loadJs function found at [loadJS] (https://github.com/filamentgroup/loadJS)
 */
function loadScript(url) {
  // reference to the first script tag in the document
  var index = window.document.getElementsByTagName("script")[0];
  // create a script element
  var script = window.document.createElement("script");
  // set the src attribute of the script tag to the url that will be passed in
  script.src = url;
  // add async to script by setting async to true
  script.async = true;
  // add defer to script by setting defer to true
  script.defer = true;
  // keep script first in document by selecting the parentNode of the index (first script) and insert the script before it
  index.parentNode.insertBefore(script, index);
}
