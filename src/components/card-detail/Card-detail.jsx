import React from "react";
import "./Card-detail.css";
import PokemonList from "../pokemonList/PokemonList.jsx";
import ArrowLeft from "/arrow-left.svg";
import Pokeball from "/pokeball.svg";
import Frame from "/Frame.svg";
import Weight from "/Weight.svg";
import Height from "/Height.svg";
import { Link, useNavigate, useParams } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  let { name } = useParams();
  
  const currentPokemon = PokemonList.find(
    element => element.name == name 
    )
  
  const Back = () => {
    navigate (`/`)
  }

  return (
    <div
      className="card-detail"
      style={{ backgroundColor: currentPokemon.color }}
    >
      <header className="name-id">
        <div className="inline">
          <img className="arrow-left" src={ArrowLeft} onClick={Back} />
          <h2 className="white">{currentPokemon.name}</h2>
          <p className="white number">#{currentPokemon.id}</p>
        </div>
        <img src={Pokeball} className="pokeball" />
        <img src={Frame} />
      </header>

      <img className="img-pokemon" src={currentPokemon.image} />

      <section className="characteristics">
        <div className="type">
          <span style={{ backgroundColor: currentPokemon.color }}>
            {currentPokemon.main_type}
          </span>
          <span style={{ backgroundColor: currentPokemon.secondary_color }}>
            {currentPokemon.secondary_type}
          </span>
        </div>
        <h3 style={{ color: currentPokemon.color }}>About</h3>
        <article className="about">
          <div>
            <div>
              <img src={Weight} />
              <p>{currentPokemon.weight}</p>
            </div>
            <h4>Weight</h4>
          </div>
          <hr />
          <div>
            <div>
              <img src={Height} />
              <p>{currentPokemon.height}</p>
            </div>
            <h4>Height</h4>
          </div>
          <hr />
          <div>
            <p>{currentPokemon.main_ability}</p>
            <p>{currentPokemon.secondary_ability}</p>
            <h4>Moves</h4>
          </div>
        </article>
        <p>{currentPokemon.description}</p>
        <h3 style={{ color: currentPokemon.color }}>Base Stats</h3>
        <article className="stats">
          {Object.keys(currentPokemon.stats).map((key) => {
            const stat = currentPokemon.stats[key];
            return (
              <>
                <div className="each-stat">
                  <div className="color-stats">
                    <h5
                      className="stat-name"
                      style={{ color: currentPokemon.color }}
                    >
                      {key}
                    </h5>
                  </div>

                  <p className="stat-number">{stat}</p>
                  <progress className="stat-bar" min="0" max="200" value={stat} style={{ accentColor: currentPokemon.color }} />
                </div>
              </>
            );
          })}
        </article>
      </section>
    </div>
  );
}

export default Card;
