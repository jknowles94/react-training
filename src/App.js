import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: [
      {name: "jknowles94"},
      {name: "Jake_Knowles94"}
    ]
  }

  userInputHandler = (event) => {
    this.setState({
      username: [
        {name: event.target.value},
        {name: "Jake_Knowles94"}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UserInput changed={this.userInputHandler} username={this.state.username[0].name}/>
        <UserOutput username={this.state.username[0].name}/>
        <UserOutput username={this.state.username[1].name}/>
      </div>
    );
  }
}

export default App;
