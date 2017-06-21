import React, { Component } from 'react';
import Pokemon from 'react-pokemon';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      text: '',
      imageArea: 'image-area-invisible'
    }
  }

  pokemonText(evt) {
    console.log(evt.target.value);
    this.setState({
      text: evt.target.value,
    })
    if (evt.keyCode === 13) {
      this.pokemonSearch();
    }
  }

  pokemonSearch() {
    this.setState({
      name: this.state.text,
      imageArea: 'image-area-visible'
    })
  }

  clearSearch() {
    this.setState({
      name: '',
      imageArea: 'image-area-invisible'
    })
  }

  render() {
    return (
      <div className="App">
        <div className="pokedex">
          <div className={this.state.imageArea}>
            <Pokemon
              name={this.state.name}
              id="pkmn" />
          </div>
          <div className="name-area">
            <input
              placeholder="type name here"
              onKeyUp={(evt) => this.pokemonText(evt)}/>
          </div>
          <div
            className="submit"
            onClick={() => this.pokemonSearch()}>
            <a>SEARCH</a>
          </div>
          <div
            className="clear"
            onClick={() => this.clearSearch()}>
            <a>CLEAR</a>
          </div>
        </div>
        <p>***not all pokemon available***</p>
      </div>
    );
  }
}

export default App;
