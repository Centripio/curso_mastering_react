import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    hola: "mundo"
  }

  render() {
    return (
      <div>
        <h1>{this.state.hola}</h1>
        <h2>desde React</h2>
        <h3>desde el curso de Mastering React</h3>
      </div>
    );
  }
}

export default App;
