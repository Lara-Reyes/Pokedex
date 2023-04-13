import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "./header/Header";
import Item from "./item/Item";
import PokemonList from "../pokemonList/PokemonList";
import Alphabetical from "/alphabetical.svg";
import Hashtag from "/hashtag.svg";

function Home() {
  const [input, setInput] = useState("");     //----> estado que contiene la cadena de búsqueda escrita por el usuario.
  const [icon, setIcon] = useState(Hashtag);     //----> estado que contiene el icono que se mostrará en el componente Header
  const [order, setOrder] = useState("n");    //----> estado que define el orden en el que se muestran los Pokémon. Puede ser "n" para ordenar por número de ID o "a" para ordenar alfabéticamente por nombre.
  const [pokemonsToShow, setPokemonsToShow] = useState(PokemonList);    //----> estado que contiene la lista de Pokémon que se mostrará en la pantalla.

  function OnChangeInput(e) {  //----> función que actualiza el estado input cada vez que el usuario escribe algo en el campo de búsqueda.
    setInput(e.target.value);
  }

  function onClick() {
    setOrder(order === "a" ? "n" : "a");  //----> función que cambia el estado order cada vez que se hace clic en el botón de ordenamiento.
  }

  useEffect(() => { //----> se utiliza el Hook useEffect para actualizar la lista de Pokémon cada vez que el usuario escribe algo en el campo de búsqueda o cambia el orden.
    const filteredPokemons = PokemonList.filter((pokemon) =>    //----> se filtran los objetos del array PokemonList para que solo queden aquellos que contengan en su propiedad name la subcadena de texto que se ingresó en el input de búsqueda (input)
      pokemon.name.toLowerCase().includes(input.toLowerCase())  
    );

    const sortedPokemons = [...filteredPokemons].sort(function (a, b) {
      var nameA = a.name;
      var nameB = b.name;         //se hace una copia de este array filtrado y se ordena alfabéticamente según el valor de la propiedad name de cada objeto, en caso de que order sea igual a "a", o numéricamente según el valor de la propiedad id, en caso de que order sea igual a "n". 
      if (nameA < nameB) {        //Los arrays resultantes se guardan en las constantes sortedPokemons y sortedNumerical, respectivamente.
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

    setPokemonsToShow(order === "a" ? sortedPokemons : sortedNumerical);  //Finalmente, se actualiza el estado pokemonsToShow con el valor de la constante que corresponda según el valor actual de order
    setIcon(order === "a" ? Alphabetical : Hashtag); //e actualiza el estado icon con la ruta a un archivo SVG que represente el símbolo correspondiente según el valor actual de order 
  }, [input, order]); //la función se ejecutará cada vez que alguna de estas variables cambie

  return (
    <div className="home-page">
      <Header onChange={OnChangeInput} onClick={onClick} source={icon} />
      <div className="main">
        {pokemonsToShow.map((pokemon) => ( // se muestra el resultado de la búsqueda y la ordenación según el estado pokemonsToShow. Para cada objeto del array resultante, se muestra un componente Item que recibe como propiedades el nombre, el id, la imagen y el color del pokemon.
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

