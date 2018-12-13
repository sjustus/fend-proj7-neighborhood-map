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
    const map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      })
    }

  render() {
    return (
      <div id="map"></div>
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

export default Map;
