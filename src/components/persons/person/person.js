import React, {Component} from 'react';
import './person.css';
// propTypes is an external package which checks if the props are using the correct rules - GOOD FOR TEAMS
// these are the props used in the person component
// Doesnt work with functional components
// Person.propTypes = {
//   click: propTypes.func,
//   age: propTypes.number,
//   name: propTypes.string,
//   changed: propTypes.func
// }

//This is a way of envoking a component with out a class - functional component - want to use this as much as possible to just render dynamic content

class Person extends Component {
	constructor(props) {
    // this overrides react so need to call props in super()
    //A lot fo examples online use older versions where state is initialised in constructor. recommended to use outside. use this.state if you make in constructor
    super(props);
    console.log("person constructor ", props);
    //Ref is good for focusing inputs and some things like that - only available in stateful components - can define properties of this class
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("person componentWillMount ");
  }

  componentDidMount() {
    console.log("person componentDidMount");
    // this is using the inputElement prop from the ref on input - good for focusing or media playback
    this.inputElement.current.focus();
  }
	render() {
		console.log("person render");
    
		return (
		  <div className="person">
		    <p onClick={this.props.click}>Im a person called {this.props.name} and I am {this.props.age}</p>
		    <p>{this.props.children}</p>
		    <input ref={this.inputElement} type="text" onChange={this.props.changed} value={this.props.name} />
		  </div>
		)
	}
}

//This is a class-based component - sometimes not needed for small simple components - this is used to change state in a component as well as rendering

// class Person extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>I'm a person called {this.props.name} and I am {this.props.age}</p>
//         <p>{this.props.children}</p>
//       </div>
//     )
//   }
// }

export default Person;