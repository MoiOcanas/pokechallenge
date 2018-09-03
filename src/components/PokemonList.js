import React from 'react'
import PokeC from './PokeC'
import { pokeClasses } from '../PokemonData';
import '../styles/PokemonList.css'

const PokemonList = ({ handleOnClick }) => {
    const cells = pokeClasses.map(pokeClass => {
      return (
        <PokeC
          key={pokeClass.id} 
          pokeClass={pokeClass} 
          handleOnClick={handleOnClick}
        />
      );
    });
  
    return (
      <section className="poke-list">
        {cells}
      </section>
    )
  }
  
  export default PokemonList