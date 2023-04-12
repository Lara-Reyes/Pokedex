import React, { useState } from "react";
import "./Home.css";
import Header from "./header/Header";
import Item from "./item/Item";
import PokemonList from "../pokemonList/PokemonList";

function Home() {
  const [input, setInput] = useState("");

  function OnChangeInput(e) {
    setInput(e.target.value);
  }

  const filteredPokemons = PokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(input.toLowerCase()));
  console.log(filteredPokemons)
  // el arreglo filteredPokemons contiene los pokemon filtrados del arreglo PokemonList que coiciden con la cadena de texto almacenado en input
  return (
    <div className="home-page">
      <Header onChange={OnChangeInput} />
      <div className="main">
        {filteredPokemons.map((pokemon) => (
          <Item key={pokemon.id} name={pokemon.name} id={pokemon.id} image={pokemon.image} color={pokemon.color} />
        ))}
      </div>
    </div>
  );
}

export default Home;