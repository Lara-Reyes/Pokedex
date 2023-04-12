import React, { useState } from "react";
import "./Home.css";
import Header from "./header/Header";
import Item from "./item/Item";
import PokemonList from "../pokemonList/PokemonList";
import Alphabetical from '/alphabetical.svg';
import Hashtag from "/hashtag.svg";

function Home() {
  const [input, setInput] = useState("");
  const [icon, setIcon] = useState(Hashtag);

  function OnChangeInput(e) {
    setInput(e.target.value);
  }

  const filteredPokemons = PokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(input.toLowerCase()));
  console.log(filteredPokemons)
  // el arreglo filteredPokemons contiene los pokemon filtrados del arreglo PokemonList que coiciden con la cadena de texto almacenado en input

  function onClick () {
   setIcon ( icon == Hashtag ? Alphabetical : Hashtag  )
  }

  return (
    <div className="home-page">
      <Header onChange={OnChangeInput} onClick={onClick} source={icon}/>
      <div className="main">
        {filteredPokemons.map((pokemon) => (
          <Item key={pokemon.id} name={pokemon.name} id={pokemon.id} image={pokemon.image} color={pokemon.color} />
        ))}
      </div>
    </div>
  );
}

export default Home;