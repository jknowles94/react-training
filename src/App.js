import React, { Component } from 'react';
import Person from './person/person';
import './App.css';

class App extends Component {
  //Props is to share data to a another component - state is to update the component data within the component

  //Containers have all the handlers and methods in it which is then passed via props to its children components

  //state only available in components extending Component
  state = {
    persons: [
      {name: "Jake", age: 24},
      {name: "Steve", age: 55}
    ]
  }

  switchNameHandler = (newName) => {
    // DO NOT CHANGE THE STATE LIKE THIS: this.state.persons[0].name = "Jake is a twat";
    this.setState({persons: [
      {name: newName, age: 24},
      {name: "Steve", age: 55}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: event.target.value, age: 24},
      {name: "Steve", age: 55}
    ]})
  }

  //click attr is passing a clickhandler to change the data to the parent component

  //Use .bind to add params to a function handler
  //IE: onClick={this.switchNameHandler.bind(this, "test")}

  render() {
    //This is how to inline style - use files, it's easier and better - only positive is its only scoped for the component you are using

    const style = {
      backgroundColour: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>This is my app</h1>
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this, "Jake is a twat")}
        >Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this, "Jake is not a twat")}
        changed={this.nameChangedHandler}
        />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    );
  }
}

export default App;
