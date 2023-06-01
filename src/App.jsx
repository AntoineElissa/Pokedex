import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];





function App() {

    /* Compteur */
    const [count, setCount] = useState(0)
    
    /*Affichage au demarrage*/
    useEffect(
      () => {
        alert("Hello pokemon trainer :)");

        if(count === 3){
          alert("pika pikachu !!");
        }
      },
      []
    );

    /* Lorsque pikachu egal 3 */
    useEffect(
      () => {
        
        if(count === 3){
          alert("pika pikachu !!");
        }
      },
      [count]
    );


    


  return (

    <>

      <NavBar taillePokList={pokemonList.length} countState ={[count, setCount]} />
      <PokemonCard pokemon={pokemonList[count]}/>

    </>

  )
}

export default App



