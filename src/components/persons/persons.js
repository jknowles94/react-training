import React from 'react';
import Person from './person/person';

//ONLY USE FUNCTIONAL COMPONENTS WHEN YOU DONT NEED TO MANAGE STATE

//This splits out the app.js (container component) to make for more readable code and good practice

const Persons = (props) => props.persons.map((person, index) => {
    return (
      <Person key={person.id}
       name={person.name} 
       age={person.age} 
       click={() => props.clicked(index)} 
       changed={(event) => props.changed(person.id, event)} />
    )
});

export default Persons;