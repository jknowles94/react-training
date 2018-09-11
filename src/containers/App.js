import React, { Component } from 'react';
import Person from '../components/person/person';
import './App.css';

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
    //This is how to inline style - use files, it's easier and better - only positive is its only scoped for the component you are using

    const style = {
      backgroundColour: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    //Sometimes when nesting a lot of conditional statements using ternary operaters are bad practice and messy - so outside of the return you can execute if statements that fire every time render is executed - keeps the return clean

    let persons = null;

    if(this.state.showPersons) {
      //this is for adding a list into JSX. just using a map function on an array in the state
      //react needs a key attr when creating lists to keep react happy in the virtual DOM
      persons = (
        <div>
        {
          this.state.persons.map((person, index) => {
            return (
              <Person key={person.id} name={person.name} age={person.age} click={this.deletePersonHandler.bind(this, index)} changed={this.nameChangedHandler.bind(this, person.id)} />
            )
          })
        }
        </div>
      )
    }


    //For conditionally loading content on a page use ternary Operators - block operaters like if() statements will not work - in JSX wrap it in {} to use javascript in the html

    // ie:

    // {
    //   this.state.showPersons ? 
    //     <div>
    //       <Person 
    //       name={this.state.persons[0].name} 
    //       age={this.state.persons[0].age}
    //       click={this.switchNameHandler.bind(this, "Jake is not a twat")}
    //       changed={this.nameChangedHandler}
    //       />
    //       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
    //     </div> 
    //   : null
    // }

    return (
      <div className="App">
        <h1>This is my app</h1>
        <button 
        style={style}
        onClick={this.togglePersons}
        >Toggle</button>
        {persons}
      </div>
    );
  }
}

export default App;
