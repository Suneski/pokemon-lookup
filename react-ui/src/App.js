import React, { Component } from 'react';
import Pokemon from 'react-pokemon';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      displayName: '',
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
    let displayName = this.state.text.toUpperCase();
    this.setState({
      name: this.state.text,
      displayName: displayName,
    })
  }



  render() {
    return (
      <div className="App">

        <button
          onClick={() => this.pokemonSearch()}>
          SUBMIT
        </button>
        <div className="pokedex">
          <div className="image-area">
            <Pokemon
              name={this.state.name} />
          </div>
          <div className="name-area">
            <input
              placeholder="pokemon name"
              onKeyUp={(evt) => this.pokemonText(evt)}/>
          </div>
        </div>
        <p>***not all pokemon available***</p>
      </div>
    );
  }
}

export default App;
