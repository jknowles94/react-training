import React, { Component } from 'react';
import './App.css';
import Persons from '../components/persons/persons';
import Cockpit from '../components/cockpit/cockpit';

//THIS IS A STATEFUL/CONTAINER COMPONENT - THIS IS WHERE METHODS AND STATE LIVES. TO ACCESS THEM USE THIS. ONLY USE THESE TO MANAGE STATE/METHODS AND LIFECYCLE HOOKS

class App extends Component {
  //Props is to share data to a another component - state is to update the component data within the component

  //Containers have all the handlers and methods in it which is then passed via props to its children components

  //state only available in components extending Component
  state = {
    persons: [
      {id: 1, name: "Jake", age: 24},
      {id: 2, name: "Steve", age: 55}
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // DO NOT CHANGE THE STATE LIKE THIS: this.state.persons[0].name = "Jake is a twat";
  //   this.setState({persons: [
  //     {name: newName, age: 24},
  //     {name: "Steve", age: 55}
  //   ]})
  // }

  deletePersonHandler = (index) => { 
    //copy of the state - flawed - objects and arrays are reference types - its changing the original data - can be flawed with bigger apps and data - always update state in an immutable fashion

    // const persons = this.state.persons;

    //Good practice is to make a copy of your array or object - spread operator
    const persons = [...this.state.persons];
    //splice it
    persons.splice(index, 1);
    //set
    this.setState({persons: persons});
  }

  nameChangedHandler = (id, event) => {
    //find the index of the element you are changing in the state
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // copy the state.person which you are editing and assign it to a const
    const person = {
      ...this.state.persons[personIndex]
    };

    // when type change on input change the value
    person.name = event.target.value;

    // make a copy of the persons array then assign person to the persons array with the person index
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  //click attr is passing a clickhandler to change the data to the parent component

  //Use .bind to add params to a function handler
  //IE: onClick={this.switchNameHandler.bind(this, "test")}

  //whenever react needs to re-render the DOM it executes the whole render()

  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        //Splitting the components makes for less more readable code instead of mapping it all in one container component
        <Persons 
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} 
        persons={this.state.persons} />
      )
    }

    return (
      <div className="App">
        <Cockpit 
        toggle={this.togglePersons}
        title={this.props.title}/>
        {persons}
      </div>
    );
  }
}

export default App;
