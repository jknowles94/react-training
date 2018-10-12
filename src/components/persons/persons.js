import React, {Component} from 'react';
import Person from './person/person';

//ONLY USE FUNCTIONAL COMPONENTS WHEN YOU DONT NEED TO MANAGE STATE AND LIFECYCLE HOOKS - THESE SHOULD BE PASSED DOWN FROM THE CONTAINER COMPONENT(STATEFUL) VIA PROPS

//This splits out the app.js (container component) to make for more readable code and good practice

// class Persons extends PureComponent
class Persons extends Component {
	constructor(props) {
    // this overrides react so need to call props in super()
    //A lot fo examples online use older versions where state is initialised in constructor. recommended to use outside. use this.state if you make in constructor
    super(props);
    console.log("persons constructor ", props);
  }

  componentWillMount() {
    console.log("persons componentWillMount ");
  }

  componentDidMount() {
    console.log("persons componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("[Update persons.js] inside componentWillReceiveProps", nextProps);
  }

  //PureCompoent is just the same as Component from react but checks the next state and next props in shouldComponentUpdate - so shoudlComponentUpdate is not needed in pure components - not everything should be pure components. Only use if you know if updates might not be required - should be strategically placed - if child components rely on props from its container than it may be worth using shouldComponentUpdate/PureComponent to only update the children if the state or props change in the container
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Update persons.js] inside shouldComponentUpdate", nextProps, nextState);
    // if return false it will not update dom
    // Really useful for stoping lifecycle if it is not needed. checking the newState and newProps against the current props and state
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("[Update persons.js] inside componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    // on update this is where you can call data
    console.log("[Update persons.js] inside componentDidUpdate");
  }

	render() {
		console.log("persons render");
		return this.props.persons.map((person, index) => {
			return (
	      <Person key={person.id}
	       name={person.name} 
	       age={person.age} 
	       click={() => this.props.clicked(index)} 
	       changed={(event) => this.props.changed(person.id, event)} />
	    )
		});
	}
}

export default Persons;