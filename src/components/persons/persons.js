import React, {Component} from 'react';
import Person from './person/person';

//ONLY USE FUNCTIONAL COMPONENTS WHEN YOU DONT NEED TO MANAGE STATE AND LIFECYCLE HOOKS - THESE SHOULD BE PASSED DOWN FROM THE CONTAINER COMPONENT(STATEFUL) VIA PROPS

//This splits out the app.js (container component) to make for more readable code and good practice

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