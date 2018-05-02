import React from 'react';

//This is a way of envoking a component with out a class

// const person = (props) => {
//   return <p>I'm a person called {props.name} and I am {props.age}</p>
// }

//This is a class-based component - sometimes not needed for small simple components
class Person extends React.Component {
  render() {
    return (
      <div>
        <p>I'm a person called {this.props.name} and I am {this.props.age}</p>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default Person;