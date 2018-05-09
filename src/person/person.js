import React from 'react';
import './person.css';
//This is a way of envoking a component with out a class - functional component - want to use this as much as possible to just render dynamic content

const Person = (props) => {
  return (
    <div className="person">
      <p onClick={props.click}>I'm a person called {props.name} and I am {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
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