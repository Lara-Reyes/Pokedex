import React from "react";
import "./Card-detail.css";
import PokemonList from "../pokemonList/PokemonList.jsx";
import ArrowLeft from "/arrow-left.svg";
import Pokeball from "/pokeball.svg";
import Frame from "/Frame.svg";
import Weight from "/Weight.svg";
import Height from "/Height.svg";

function Card() {
  return (
    <div
      className="card-detail"
      style={{ backgroundColor: PokemonList[0].color }}
    >
      <header className="name-id">
        <div className="inline">
          <img className="arrow-left" src={ArrowLeft} />
          <h2 className="white">{PokemonList[0].name}</h2>
          <p className="white number">#{PokemonList[0].id}</p>
        </div>
        <img src={Pokeball} className="pokeball" />
        <img src={Frame} />
      </header>

      <img className="img-pokemon"  src={PokemonList[0].image} />

      <section className="characteristics">
        <div className="type">
        <span style={{backgroundColor:PokemonList[0].color}}>{PokemonList[0].main_type}</span>
        <span style={{backgroundColor:PokemonList[0].secondary_color}}>{PokemonList[0].secondary_type}</span>
        </div>
        <h3 style={{color:PokemonList[0].color}}>About</h3>
        <article className="about">
          <div>
            <div>
              <img src={Weight} />
              <p>{PokemonList[0].weight}</p>
            </div>
            <h4>Weight</h4>
          </div>
          <hr />
          <div>
            <div>
              <img src={Height} />
              <p>{PokemonList[0].height}</p>
            </div>
            <h4>Height</h4>
          </div>
          <hr />
          <div>
            <p>{PokemonList[0].main_ability}</p>
            <p>{PokemonList[0].secondary_ability}</p>
            <h4>Moves</h4>
          </div>
        </article>
        <p>{PokemonList[0].description}</p>
        <h3 style={{color:PokemonList[0].color}}>Base Stats</h3>
        <article className="stats">
          <div className="" style={{color:PokemonList[0].color}}>
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
              value={PokemonList[0].stats.hp}
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
