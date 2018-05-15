import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    input: "Jake Knowles"
  }

  lengthListener = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  deleteChar = (index) => {
    let list = [...this.state.input];

    list.splice(index,1);

    const newList = list.join('');

    this.setState({
      input: newList
    });

  }

  render() {

    let output = null;
    let list = [...this.state.input];

    if(list.length > 0) {
      output = list.map((char, index) => {
        return (
          <CharComponent key={index} input={char} delete={this.deleteChar.bind(this, index)}/>
        )
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" value={this.state.input} onChange={this.lengthListener}/>
        </header>
        <p className="App-intro">
          {this.state.input.length}
        </p>
        <Validation length={this.state.input.length}/>
        {output}
      </div>
    );
  }
}

export default App;
