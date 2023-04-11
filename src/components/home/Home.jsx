import React, { useState } from "react";
import "./Home.css";
import Header from "./header/Header";
import Item from "./item/Item";
import PokemonList from "../pokemonList/PokemonList";

function Home() {
  const [filter, setFilter] = useState();

  function input(e) {
    setFilter(e.target.value);
  }

  // const show = PokemonList.filter((palabra) => palabra.includes(filter));

  return (
    <div className="home-page">
      <Header onChange={input} />
      <div className="main">
        {PokemonList.map((pokemon) => (
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