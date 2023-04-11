import React from "react";
import "./Home.css";
import Header from "./header/Header";
import Item from "./item/Item";
import pokemonList from "../pokemonList/PokemonList";

function Home() {
  return (
    <div className="home-page">
      <Header />
      <div className="main">
        {pokemonList.map((pokemon) => (
          <Item
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.image}
            color={pokemon.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;