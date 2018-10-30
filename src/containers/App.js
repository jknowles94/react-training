import React, { Component } from 'react';
import './App.css';
import Persons from '../components/persons/persons';
import Cockpit from '../components/cockpit/cockpit';

// HIGHER ORDER COMPONENTS/FUCNTIONS - COULD BE USED TO WRAP COMPONENTS TO DO SOMETHING SMALL AND WRAPS THE COMPONENT - LIKE DIRECTIVE IN ANGULAR - EXAMPLE IS ADDING A CLASSNAME TO A WRAPPING DIV - NEVER TRY MANIPULATING COMPONENTS IN HOC 
// Aux is a classic example of HOC to stop adding wrapping divs and just return the component

// React 16.2 Feature: Fragments
// Section 7, Lecture 95
// If your project uses React 16.2, you can now use a built-in "Aux" component - a so called fragment.

// It's actually not called Aux  but you simply use <>  - an empty JSX tag.

// So the following code

// <Aux>
//     <h1>First Element</h1>
//     <h1>Second Element</h1>
// </Aux>
// becomes

// <>
//     <h1>First Element</h1>
//     <h1>Second Element</h1>
// </>


//Component lifecycle
//Only available in stateful components

//COMPONENT LIFECYCLE FOR CREATION - constructor(), componentWillMount(), componentDidMount(), render();
//Order of execution:
//constructor() - default ES6, passes on props to contstructor(props); Must call super(props) inside constructor to get parent props;
//Can initialise the state in the constructor - side effects are reaching to a web server in constructor()
//componentWillMount() - exists for historic reasons - dont really use it anymore
//render() - gives react an idea of what it should look like when it goes to the DOM - prepares and structures JSX code
//After render react then renders all the children components found in the render() and performs the same lifecycle
//componentDidMount() - tells you that this componenet was successfully mounted - this is where you get your data. Do not update the state here though will trigger a re render;
// componentWillUnmount() is applied to a component that is about to be removed from the DOM

// COMPONENT LIFECYCLE FOR UPDATING - TRIGGERED BY PARENT
// componentWillRecieveProps(nextProps) - gets the upcoming props as argument - sync local state to the props if parent changes updates the state in this component.
// shoudlComponentUpdate(nextProps, nextState) - could cancel updating process - return true - updates, returns false - doesnt update. could save performance if you stop updating a component if it is not needed.
//componentWillUpdate(nextProps, nextState) - if shouldComponentUpdate is true will give ability to sync props and state - use this rather than componentWillRecieveProps
// render()
// componentDidUpdate() - if the component updates


// COMPONENT LIFECYCLE FOR UPDATING INTERNALLY (STATE CHANGE)
// shouldComponentUpdate(nextprops, nextState)
// componentWillUpdate(nextProps, nextState)
// render()
// componentDidUpdate()


//THIS IS A STATEFUL/CONTAINER COMPONENT - THIS IS WHERE METHODS AND STATE LIVES. TO ACCESS THEM USE THIS. ONLY USE THESE TO MANAGE STATE/METHODS AND LIFECYCLE HOOKS

class App extends Component {
  constructor(props) {
    // this overrides react so need to call props in super()
    //A lot fo examples online use older versions where state is initialised in constructor. recommended to use outside. use this.state if you make in constructor
    super(props);
    console.log("constructor ", props);
  }

  componentWillMount() {
    console.log("componentWillMount ");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Update app.js] inside shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("[Update app.js] inside componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    // on update this is where you can call data
    console.log("[Update app.js] inside componentDidUpdate");
  }

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

  // when mutating the state depending on the previous state. should use the functional setState
  // the function takes an arguement of the previous state which you can refer to, to update the state
  // this.setState((prevState, props) => {
  //   return {
  //     toggle: prevState.toggle + 1
  //   }
  // });

  //click attr is passing a clickhandler to change the data to the parent component

  //Use .bind to add params to a function handler
  //IE: onClick={this.switchNameHandler.bind(this, "test")}

  //whenever react needs to re-render the DOM it executes the whole render()

  render() {
    console.log("render");
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
