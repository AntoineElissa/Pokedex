import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

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


  /* Evenement clic bouton prec/suivant */
  const handleClick = (event) => {

  
    const parent = event.target;

    /* Debug */
    console.log("taille tab pokemon : " + pokemonList.length);
    console.log(count);


    /* Detect precedent ou suivant selon id target */
    switch (parent.id) {




      /* Precedente */
      case "btn-prec" : 
        
        setCount(count - 1);
          
        if(count < 0 ){
            setCount(pokemonList.length -1 );
          }
      
      break;




      /* Suivante */
      case "btn-suiv": 
      
      setCount(count + 1);

      if(count >= pokemonList.length ){
        setCount(0);
      }

      break;
    }
    
   }

  
  return (

    <>

      <PokemonCard pokemon={pokemonList[count]}/>

      <h1> Selectionne ton pokémon </h1>
      <button id="btn-prec" className="button" onClick = {handleClick} > Precedente </button>
      <button id="btn-suiv" className="button" onClick = {handleClick} > Suivante </button>

    </>

  )
}

export default App
