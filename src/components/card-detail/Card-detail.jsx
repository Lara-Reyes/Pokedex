import React from "react";
import "./Card-detail.css";
import PokemonList from "../pokemonList/PokemonList.jsx";
import ArrowLeft from "/arrow-left.svg";
import Pokeball from "/pokeball.svg";
import Frame from "/Frame.svg";
import Weight from "/Weight.svg";
import Height from "/Height.svg";
import FrameLeft from '/frameLeft.svg'
import { useNavigate, useParams } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  let { name } = useParams();
  
  const currentPokemon = PokemonList.find(
    element => element.name == name 
    )

    const currentIndex = PokemonList.findIndex(
      element => element.name == name 
    )
  
  
  const Back = () => {
    navigate (`/`)
  }
  const next = () => {
    if (currentIndex +1 === PokemonList.length ) {
      navigate (`/pokemones/${PokemonList[0].name}`)
    } else {
      navigate (`/pokemones/${PokemonList[currentIndex +1].name}`)
  }};
  const previous = () => {
    if (currentIndex === 0 ) {
      navigate (`/pokemones/${PokemonList[PokemonList.length-1].name}`)
    } else {
      navigate (`/pokemones/${PokemonList[currentIndex -1].name}`)
  }}
  

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
        <img className="frame" src={Frame}  onClick={next}/>
        <img className="frameLeft" src={FrameLeft} onClick={previous} />
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
            <div className="about-wh">
              <img className="about-img weight" src={Weight} />
              <p className="info">{currentPokemon.weight}</p>
            </div>
            <h4 className="h4-wh">Weight</h4>
          </div>
          <hr />
          <div>
            <div className="about-wh">
              <img className="about-img height" src={Height} />
              <p className="info">{currentPokemon.height}</p>
            </div>
            <h4 className="h4-wh">Height</h4>
          </div>
          <hr />
          <div>
            <p className="info">{currentPokemon.main_ability}</p>
            <p className="info move">{currentPokemon.secondary_ability}</p>
            <h4 className="h4-moves">Moves</h4>
          </div>
        </article>
        <p className="description">{currentPokemon.description}</p>
        <h3 style={{ color: currentPokemon.color }}>Base Stats</h3>
        <article className="stats">
          {Object.keys(currentPokemon.stats).map((key, index) => {
            const stat = currentPokemon.stats[key];
            return (
              <div key={index}>
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
              </div>
            );
          })}
          <hr className="line" />
        </article>
      </section>
    </div>
  );
}

export default Card;
