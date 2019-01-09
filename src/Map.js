//To make things easier
// Api key: AIzaSyCJtkfy3qr5FkD3QLKz_YyMCm4igwa3YbA
// Geocoding services: //https://maps.googleapis.com/maps/api/geocode/json?address=10600+se+mcloughlin+blvd+ste+105+Milwaukie+OR&key=AIzaSyCJtkfy3qr5FkD3QLKz_YyMCm4igwa3YbA
import React, { Component } from 'react';

class Map extends Component {
  // Wait until component loads add script and load map
  componentDidMount() {
    /*
     * store api key in variable and plug into loadScript
     * idea from [Using Google Map in React Component] (https://stackoverflow.com/questions/48493960/using-google-map-in-react-component)
    */
    const apiKey = 'AIzaSyCJtkfy3qr5FkD3QLKz_YyMCm4igwa3YbA';
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`)
    // set window.initMap to this.initMap so that it can be called
    window.initMap = this.initMap;
  }

  /*
   *Refactor initMap function from Google docs app to ES6
   * [Google Maps JavaScript API Overview] (https://developers.google.com/maps/documentation/javascript/tutorial)
  */
  initMap = () => {
    // set google to window.google so that google can be accessed
    const google = window.google
    // create a new map with Milawaukie, OR as inital location
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 45.4465323, lng: -122.6323315},
        zoom: 15
      })

    // create an array to store default locations to be marked when map loads
    const locations = [
      {title: 'Things From Another World', location: {lat: 45.4434415, lng: -122.641392}},
      {title: 'Dark Horse Comics', location: {lat: 45.44397559999999, lng: -122.640613}},
      {title: 'Spring Creek Coffee House', location: {lat: 	45.4458543, lng: -122.6424054}},
      {title: 'Wind Horse Cafe', location: {lat: 45.4460054, lng: -122.6419976}},
      {title: 'Rohst Coffee', location: {lat: 45.4417007, lng: -122.6393937}}
    ]

    // create an array to hold all markers
    const markers = []

    // for every location in the locatons array
    for (let i = 0; i < locations.length; i++) {
      // set position and title
      const position = locations[i].location;
      const title = locations[i].title;
      // create a new marker
      const marker = new google.maps.Marker({
        map: map,
        position: position,
        title: title,
        animation: google.maps.Animation.DROP,
        id: i
      });
      // push new marker to markers array
      markers.push(marker);
    }


    }

  render() {
    return (
      <div id="map-container">
        <div id="map"></div>
      </div>
    )
  }
}

/*
 * Function that will load the Google Maps API script tag
 * Takes url as parameter -- url will be the Maps script needed
 * Resource: [Udacity | Neighborhood Map [2] - Add Google Maps to React App [Without Any External Components]] (https://www.youtube.com/watch?v=W5LhLZqj76s) for loadScript function
 * Also saw this function in [Making Google Maps Work With React] (https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/) (article) which references the loadJs function found at [loadJS] (https://github.com/filamentgroup/loadJS)
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

/* locations
var locations = [
  {title: 'Things From Another World', location: {lat: 45.4434415, lng: -122.641392}},
  {title: 'Dark Horse Comics', location: {lat: 45.44397559999999, lng: -122.640613}},
  {title: 'Spring Creek Coffee House', location: {lat: 	45.4458543, lng: -122.6424054}},
  {title: 'Wind Horse Cafe', location: {lat: 45.4460054, lng: -122.6419976}},
  {title: 'Rohst Coffee', location: {lat: 45.4417007, lng: -122.6393937}}
];
*/

export default Map;
