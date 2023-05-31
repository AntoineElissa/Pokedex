
/* Définition des props */  
import PropTypes from 'prop-types'

PokemonCard.propTypes = {

  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,

}

  
  
  /* Fonction */
  function PokemonCard(pokeprops) {

   

    return (

      <figure> 

          {("imgSrc" in pokeprops.pokemon && pokeprops.pokemon.name !== "") ? <img src = {pokeprops.pokemon.imgSrc} alt={pokeprops.pokemon.name} /> : <p> ??? </p>}
          
          <figcaption>{pokeprops.pokemon.name}</figcaption>

      </figure>

    )

  }


export default PokemonCard;


