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
    let name = this.state.text;
    if (this.state.text === 'deoxys') {
      name = 'deoxys-normal'
    }
    if (this.state.text === 'giratina') {
      name = 'giratina-altered'
    }
    if (this.state.text === 'shaymin') {
      name = 'shaymin-land'
    }
    if (this.state.text === 'darmanitan') {
      name = 'darmanitan-standard'
    }
    if (this.state.text === 'meloetta') {
      name = 'meloetta-aria'
    }
    if (this.state.text === 'hoopa') {
      name = 'hoopa-confined'
    }
    if (this.state.text === 'oricorio') {
      name = 'oricorio-baile'
    }
    if (this.state.text === 'lycanroc') {
      name = 'lycanroc-midnight'
    }

    this.setState({
      name: name,
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
