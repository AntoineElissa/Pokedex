
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


function PokemonCard() {

    const pokemon  = pokemonList[1];
    let chaineHtml = "";

    //Vérifie que imgSrc existe dans objet pokemon et qu'elle n'est pas vide
    if("imgSrc" in pokemon && pokemon.imgSrc !== ""){
        chaineHtml = <img src = {pokemon.imgSrc} alt={pokemon.name} />;
    }
    else {
        chaineHtml = <p> ??? </p>;
    }
    
   
    return( 
    
    <figure>

        {chaineHtml}
        <figcaption>{pokemon.name}</figcaption>
    
    </figure>

    )
}


export default PokemonCard;

