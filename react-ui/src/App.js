import React, { Component } from 'react';
import Pokemon from 'react-pokemon';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      text: '',
      alt: 'alt-invisible',
      form: '',
      formVis: 'form-invisible',
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

    this.setState({
      alt: 'alt-visible',
      formVis: 'form-visible',
    })

    if (this.state.text === 'deoxys') {
      name = 'deoxys-normal'
    }
    else if (this.state.text === 'giratina') {
      name = 'giratina-altered';
      this.setState({
        form: 'ALTERED'
      })
    }
    else if (this.state.text === 'shaymin') {
      name = 'shaymin-land'
    }
    else if (this.state.text === 'darmanitan') {
      name = 'darmanitan-standard'
    }
    else if (this.state.text === 'meloetta') {
      name = 'meloetta-aria'
    }
    else if (this.state.text === 'hoopa') {
      name = 'hoopa-confined'
    }
    else if (this.state.text === 'oricorio') {
      name = 'oricorio-baile'
    }
    else if (this.state.text === 'lycanroc') {
      name = 'lycanroc-midnight'
    }
    else {
      this.setState({
        alt: 'alt-invisible',
        formVis: 'form-invisible',
      })
    }

    this.setState({
      name: name,
      imageArea: 'image-area-visible',
    })
  }

  altImage() {
    // GIRATINA
    if (this.state.name === 'giratina-altered') {
      this.setState({
        name: 'giratina-origin',
        form: 'ORIGIN'
      })
    }
    else if (this.state.name === 'giratina-origin') {
      this.setState({
        name: 'giratina-altered',
        form: 'ALTERED'
      })
    }
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
            SEARCH
          </div>
          <div
            className={this.state.formVis}>
            <p>FORM:</p>
            <p>{this.state.form}</p>
          </div>
          <div
            className={this.state.alt}
            onClick={() => this.altImage()}>
            <a>ALT</a>
          </div>
        </div>
        <p>***not all pokemon available***</p>
      </div>
    );
  }
}

export default App;
