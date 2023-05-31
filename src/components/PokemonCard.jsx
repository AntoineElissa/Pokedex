
/* Définition des props */  
import PropTypes from 'prop-types'

PokemonCard.propTypes = {

  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,

}

  
  
  // /* Fonction */
  // function PokemonCard(pokeprops) {

   

  //   return (

  //     <figure> 

  //         {("imgSrc" in pokeprops.pokemon && pokeprops.pokemon) ? <img src = {pokeprops.pokemon.imgSrc} alt={pokeprops.pokemon.name} /> : <p> ??? </p>}
          
  //         <figcaption>{pokeprops.pokemon.name}</figcaption>

  //     </figure>

  //   )

  // }

  function PokemonCard(pokeprops) {
    return (
      <figure> 
        {pokeprops.pokemon && pokeprops.pokemon.imgSrc ? (
          <img src={pokeprops.pokemon.imgSrc} alt={pokeprops.pokemon.name} />
        ) : (
          <p> ??? </p>
        )}
        <figcaption>{pokeprops.pokemon && pokeprops.pokemon.name}</figcaption>
      </figure>
    )
  }


export default PokemonCard;


// function PokemonCard(pokeprops) {
//   if (!pokeprops.pokemon || !('imgSrc' in pokeprops.pokemon)) {
//     return <p>Erreur: Pokemon invalide</p>;
//   }

//   // Reste du code

//   return (
//     <figure>
//       <img src={pokeprops.pokemon.imgSrc} alt={pokeprops.pokemon.name} />
//       <figcaption>{pokeprops.pokemon.name}</figcaption>
//     </figure>
//   );
// }