import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import PropTypes from 'prop-types'


PokemonCard.propTypes = {

  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,

}




function App() {
  const [count, setCount] = useState(0)

  
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

  return (
    <>

      <PokemonCard pokemon={pokemonList[1]}/>

    </>
  )
}

export default App
