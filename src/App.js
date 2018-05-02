import React, { Component } from 'react';
import Person from './person/person';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is my app</h1>
        <Person name="Jake" age="24"/>
        <Person name="Steve" age="45">I love Audis</Person>
      </div>
    );
  }
}

export default App;
