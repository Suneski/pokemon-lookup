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
      text: evt.target.value.toLowerCase(),
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
      name = 'deoxys-normal';
      this.setState({
        form: 'NORMAL'
      })
    }
    else if (this.state.text === 'giratina') {
      name = 'giratina-altered';
      this.setState({
        form: 'ALTERED'
      })
    }
    else if (this.state.text === 'shaymin') {
      name = 'shaymin-land';
      this.setState({
        form: 'LAND'
      })
    }
    else if (this.state.text === 'darmanitan') {
      name = 'darmanitan-standard';
      this.setState({
        form: 'STANDARD'
      })
    }
    else if (this.state.text === 'meloetta') {
      name = 'meloetta-aria';
      this.setState({
        form: 'ARIA'
      })
    }
    else if (this.state.text === 'hoopa') {
      name = 'hoopa-confined';
      this.setState({
        form: 'CONFINED'
      })
    }
    else if (this.state.text === 'oricorio') {
      name = 'oricorio-baile';
      this.setState({
        form: 'BAILE'
      })
    }
    else if (this.state.text === 'lycanroc') {
      name = 'lycanroc-midday';
      this.setState({
        form: 'MIDDAY'
      })
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
    // DEOXYS
    if (this.state.name === 'deoxys-normal') {
      this.setState({
        name: 'deoxys-attack',
        form: 'ATTACK'
      })
    }
    else if (this.state.name === 'deoxys-attack') {
      this.setState({
        name: 'deoxys-defense',
        form: 'DEFENSE'
      })
    }
    else if (this.state.name === 'deoxys-defense') {
      this.setState({
        name: 'deoxys-speed',
        form: 'SPEED'
      })
    }
    else if (this.state.name === 'deoxys-speed') {
      this.setState({
        name: 'deoxys-normal',
        form: 'NORMAL'
      })
    }
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
    // SHAYMIN
    if (this.state.name === 'shaymin-land') {
      this.setState({
        name: 'shaymin-sky',
        form: 'SKY'
      })
    }
    else if (this.state.name === 'shaymin-sky') {
      this.setState({
        name: 'shaymin-land',
        form: 'LAND'
      })
    }
    // DARMANITAN
    if (this.state.name === 'darmanitan-standard') {
      this.setState({
        name: 'darmanitan-zen',
        form: 'ZEN'
      })
    }
    else if (this.state.name === 'darmanitan-zen') {
      this.setState({
        name: 'darmanitan-standard',
        form: 'STANDARD'
      })
    }
    // MELOETTA
    if (this.state.name === 'meloetta-aria') {
      this.setState({
        name: 'meloetta-pirouette',
        form: 'PIROUETTE'
      })
    }
    else if (this.state.name === 'meloetta-pirouette') {
      this.setState({
        name: 'meloetta-aria',
        form: 'ARIA'
      })
    }
    // HOOPA
    if (this.state.name === 'hoopa-confined') {
      this.setState({
        name: 'hoopa-unbound',
        form: 'UNBOUND'
      })
    }
    else if (this.state.name === 'hoopa-unbound') {
      this.setState({
        name: 'hoopa-confined',
        form: 'CONFINED'
      })
    }
    // ORICORIO
    if (this.state.name === 'oricorio-baile') {
      this.setState({
        name: 'oricorio-pom-pom',
        form: 'POM-POM'
      })
    }
    else if (this.state.name === 'oricorio-pom-pom') {
      this.setState({
        name: 'oricorio-pau',
        form: "PA'U"
      })
    }
    else if (this.state.name === 'oricorio-pau') {
      this.setState({
        name: 'oricorio-sensu',
        form: 'SENSU'
      })
    }
    else if (this.state.name === 'oricorio-sensu') {
      this.setState({
        name: 'oricorio-baile',
        form: 'BAILE'
      })
    }
    // LYCANROC
    if (this.state.name === 'lycanroc-midday') {
      this.setState({
        name: 'lycanroc-midnight',
        form: 'MIDNIGHT'
      })
    }
    else if (this.state.name === 'lycanroc-midnight') {
      this.setState({
        name: 'lycanroc-midday',
        form: 'MIDDAY'
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
        <div className="after-text">
          <p>*** Cosmoem missing from database ***</p>
          <p>Alternate Forms Supported: Deoxys, Giratina, Shaymin, Darmanitan, Meloetta, Hoopa, Oricorio, Lycanroc</p>
          <p>Mega and Alolan Form Support Pending</p>
        </div>
      </div>
    );
  }
}

export default App;
