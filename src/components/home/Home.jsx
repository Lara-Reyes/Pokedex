import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "./header/Header";
import Item from "./item/Item";
import PokemonList from "../pokemonList/PokemonList";
import Alphabetical from "/alphabetical.svg";
import Hashtag from "/hashtag.svg";

function Home() {
  const [input, setInput] = useState("");
  const [icon, setIcon] = useState(Hashtag);
  const [order, setOrder] = useState("n");
  const [pokemonsToShow, setPokemonsToShow] = useState(PokemonList);

  useEffect(() => {
    console.log(input);
    setIcon(order === "a" ? Alphabetical : Hashtag);
    const filteredPokemons = PokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(input.toLowerCase())
  );
  const sortedPokemons = [...filteredPokemons].sort(function (a, b) {
    var nameA = a.name;
    var nameB = b.name;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const sortedNumerical = [...filteredPokemons].sort(function (a, b) {
    return a.id - b.id;
  }); 
  console.log(sortedNumerical, sortedPokemons);
  setPokemonsToShow(
    order === "a" ? sortedPokemons : sortedNumerical
  );
  console.log(order);
  }, [input, order]);



  function OnChangeInput(e) {
    setInput(e.target.value);
  }

  function onClick() {
    setOrder(order === "a" ? "n" : "a");
  }

  return (
    <div className="home-page">
      <Header onChange={OnChangeInput} onClick={onClick} source={icon} />
      <div className="main">
        {pokemonsToShow.map((pokemon) => (
          <Item
            key={pokemon.id}
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
