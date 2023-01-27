import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PokemonList from "../components/PokemonList";

const PokemonContainer = () => {

    const [pokemons, setPokemons] = useState([]);
    
    // useEffect(() => {
    //     const allPromises = [];
    //     for(let i = 0; i < 11; i++){
    //         allPromises.push(
    //             fetch(`https://pokeapi.co/api/v2/pokemon/?limit={i}`)
    //             .then((response) => response.json())
    //             )
    //         }
    //         Promise.all(allPromises)
    //         .then((allResults) => {
    //             const allPokemon = allResults.map((result) => result.data).flat();
    //             const allPokemonNames = allPokemon.map((pokemonObject) => pokemonObject.name)
    //             console.log(allPokemonNames);
    //         })
    //         setPokemon(allPromises)
    //     }, [])
    // Do not use this - EVER!!!!
        
        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
                const data = await response.json();
                // setPokemon(data.results);
                // The data is object -> we need to extract
                let result = [];
                data.results.forEach((pokemon) => {
                    fetch(pokemon.url)
                    .then((response) => response.json())
                    .then((response) => result.push(response))
                });
                setPokemons(result)
            }
            fetchData()

        }, [])


    return ( 
        <BrowserRouter>
            <div className="App">
                <div className="hero-image">
                    <div className="hero-text">
                        <h1>PokeWorld</h1>
                        <h2>Welcome to the world of Pokemon!</h2>
                        <ul>
                            <li>
                                <Link to="/all-pokemon">All Pokemon</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <section className="homepage-background">
                </section>
                    <Routes>
                        <Route path="/all-pokemon" element={
                            <PokemonList
                                pokemons={pokemons}
                            />}
                        />
                    </Routes>
            </div>
        </BrowserRouter>
     );
}
 
export default PokemonContainer;