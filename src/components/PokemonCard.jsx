


      /* EN TERNAIRE */
  function PokemonCard(pokeprops) {

   

    return (

      <figure> 

          {("imgSrc" in pokeprops.pokemon && pokeprops.pokemon.name !== "") ? <img src = {pokeprops.pokemon.imgSrc} alt={pokeprops.pokemon.name} /> : <p> ??? </p>}
          
          <figcaption>{pokeprops.pokemon.name}</figcaption>

      </figure>

    )

  }


export default PokemonCard;

