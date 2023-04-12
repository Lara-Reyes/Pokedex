import React from "react";
import "./Header.css";
import Pokeball from "/pokeball.svg";
import Search from "/search.svg";
import Hashtag from "/hashtag.svg";
import Alphabetical from '/alphabetical.svg';

function Header({ onChange , onClick , source }) {
  return (
    <>
      <div className="header">
        <img className="pokeball-img" src={Pokeball} alt="pokeball" />
        <h1>Pokédex</h1>
      </div>
      <div className="search">
        <img className="search-icon" src={Search} alt="search" />
        <input onChange={onChange} className="searchBar" type="search" placeholder="Search" />
        <button>
          <img className="sort" src={source} alt="sort" onClick={onClick} />
        </button>
      </div>
    </>
  );
}

export default Header;
