import React, { Component } from 'react';
import Person from './person/person';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //Props is to share data to a another component - state is to update the component data within the component

  //state only available in components extending Component
  state = {
    persons: [
      {name: "Jake", age: 24},
      {name: "Steve", age: 55}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>This is my app</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    );
  }
}

export default App;
