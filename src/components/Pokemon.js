const Pokemon = ({pokemon}) => {

    // const pokemonMoves = pokemon.map

    return ( 
        <>
            <h4>{pokemon.name}</h4>
            <h5>Pokemon Type:</h5>
                {pokemon.types.map(type => {
                    return <li key={pokemon.name}>
                        {type.type.name}
                    </li>
                })}
            <h5>Pokemon Abilities:</h5>
                {pokemon.abilities.map(ability => {
                    return <li key={pokemon.name}>
                        {ability.ability.name}
                    </li>
                })}
        </>
     );
}
 
export default Pokemon;