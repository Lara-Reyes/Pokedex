import React from "react";
import "./Card-detail.css";
import PokemonList from "../pokemonList/PokemonList.jsx";
import ArrowLeft from "/arrow-left.svg";
import Pokeball from "/pokeball.svg";
import Frame from "/Frame.svg";
import Weight from "/weight.svg";
import Height from "/Height.svg";


function Card() {
  return (
    <div className="card-detail">
      <header>
        <div>
          <img src={ArrowLeft} />
          <h2>{PokemonList[0].name}</h2>
          <p>#{PokemonList[0].id}</p>
          <img src={Pokeball} />
        </div>
        <img src={Frame} />
      </header>

      <img src={PokemonList[0].image} />

      <section>
        <span>{PokemonList[0].main_type}</span>
        <span>{PokemonList[0].secondary_type}</span>
        <h3>About</h3>
        <article>
          <div>
            <div>
              <img src={Weight} />
              <p>{PokemonList[0].weight}</p>
            </div>
            <h4>Weight</h4>
            <hr />
          </div>
          <div>
            <div>
              <img src={Height} />
              <p>{PokemonList[0].height}</p>
            </div>
            <h4>Height</h4>
            <hr />
          </div>
          <div>
            <p>{PokemonList[0].main_ability}</p>
            <p>{PokemonList[0].secondary_ability}</p>
            <h4>Moves</h4>
          </div>
          <p>{PokemonList[0].description}</p>
        </article>
        <h3>Base Stats</h3>
        <article>
          <div>
            <h5>HP</h5>
            <h5>ATK</h5>
            <h5>DEF</h5>
            <h5>SATK</h5>
            <h5>SDEF</h5>
            <h5>SPD</h5>
          </div>
          <hr />
          <div>
            <label htmlFor="">0{PokemonList[0].stats.hp}</label>{" "}
            <progress
              id=""
              max="200"
              value={pokemonList[0].stats.hp}
            ></progress>

            <label htmlFor="">0{PokemonList[0].stats.atk}</label>{" "}
            <progress
              id=""
              max="200"
              value={PokemonList[0].stats.atk}
            ></progress>

            <label htmlFor="">0{PokemonList[0].stats.def}</label>{" "}
            <progress
              id=""
              max="200"
              value={PokemonList[0].stats.def}
            ></progress>

            <label htmlFor="">0{PokemonList[0].stats.satk}</label>{" "}
            <progress
              id=""
              max="200"
              value={PokemonList[0].stats.satk}
            ></progress>

            <label htmlFor="">0{PokemonList[0].stats.sdef}</label>{" "}
            <progress
              id=""
              max="200"
              value={PokemonList[0].stats.sdef}
            ></progress>

            <label htmlFor="">0{PokemonList[0].stats.spd}</label>{" "}
            <progress
              id=""
              max="200"
              value={PokemonList[0].stats.spd}
            ></progress>

          </div>
        </article>
      </section>
    </div>
  );
}

export default Card;
