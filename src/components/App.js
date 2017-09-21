import React, { Component } from 'react';
import '../styles/App.css';
import cat from '../images/cat.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={cat} 
             className="upndown" 
             alt="cat" />
      </div>
    );
  }
}

export default App;
