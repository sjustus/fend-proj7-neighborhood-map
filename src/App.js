import React, { Component } from 'react';
import './App.css';
import Map from './Map.js'
import Header from './Header.js'
import Listview from './Listview.js'

class App extends Component {
  render() {
    return (
      <div id="App">
        <Header />

        <main>
          <Listview />
          <Map />
        </main>
      </div>
    )
  }
}

export default App;
