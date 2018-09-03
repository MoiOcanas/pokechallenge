import React, { Component } from 'react'
import PokemonList from './components/PokemonList';
import DetailView from './components/DetailView'
import Pokemon from '../src/Pokemon'
import './styles/App.css'

class App extends Component {
  constructor(){
    super()

    this.state= {
      pokemon: {}
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  render() {

    const style = {
      textAlign: 'center',
      backgroundColor: 'red',
      color: 'white',
      border: '2px solid black'
    }
    return (
      <div>
        <div style={style}>
          <h1> Moyito Ocanas Pokedex </h1>
        </div>
      <div className="App">
        <PokemonList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon}/>
      </div>
      </div>
    );
  }
}

export default App;
