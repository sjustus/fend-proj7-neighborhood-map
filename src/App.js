import React, { Component } from 'react';
import './App.css';
import Map from './Map.js'
import Header from './Header.js'
import Listview from './Listview.js'

class App extends Component {
  constructor(props) {
    super(props);
    //store locations in state in order to be accessible to Map & Listview components
    this.state = {
      locations: [
        {title: 'Things From Another World', location: {lat: 45.4434415, lng: -122.641392}},
        {title: 'Dark Horse Comics', location: {lat: 45.44397559999999, lng: -122.640613}},
        {title: 'Spring Creek Coffee House', location: {lat: 	45.4458543, lng: -122.6424054}},
        {title: 'Wind Horse Cafe', location: {lat: 45.4460054, lng: -122.6419976}},
        {title: 'Rohst Coffee', location: {lat: 45.4417007, lng: -122.6393937}}
      ]
    }
  }
  render() {
    return (
      <div id="App">
        <Header />

        <main>
          <Listview />
          <Map locations={this.state.locations}/>
        </main>
      </div>
    )
  }
}

export default App;
