import Pokemon from "./Pokemon";

const PokemonList = ({pokemons}) => {

    // const ListPoke = pokemon.results;

    const pokemonComponents = pokemons.map((pokemon) => {
        return <Pokemon
                key={pokemon.id}
                pokemon={pokemon}/>
    })

    return ( 
        <>
            <h3>Pokedex</h3>
            <hr/>
            <div className="all-pokemon">
                {pokemonComponents}
            </div>
        </>
     );
}
 
export default PokemonList;