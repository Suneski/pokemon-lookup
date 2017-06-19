import React, { Component } from 'react';
import Pokemon from 'react-pokemon';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'bulbasaur',
      text: '',
    }
  }

  pokemonText(evt) {
    console.log(evt.target.value);
    this.setState({
      text: evt.target.value,
    })
  }

  pokemonSearch() {
    this.setState({
      name: this.state.text,
    })
  }

  render() {
    return (
      <div className="App">
        <input
          placeholder="pokemon name"
          onKeyUp={(evt) => this.pokemonText(evt)}/>
        <button
          onClick={() => this.pokemonSearch()}>
          SUBMIT
        </button>
        <Pokemon
          name={this.state.name} />
      </div>
    );
  }
}

export default App;
