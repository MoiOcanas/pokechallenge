import React from 'react'
import '../styles/PokeC.css'
import sprites from '../assets/sprites.png'

const PokeC = ({ pokeClass, handleOnClick }) => {
    const { id, backgroundPosition } = pokeClass
    const style = { backgroundImage: `url(${sprites})`, backgroundPosition }

    return <button style={ style } onClick={() => handleOnClick(id)} className="poke-cell"></button>
  }

export default PokeC