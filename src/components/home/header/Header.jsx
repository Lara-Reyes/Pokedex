import React from "react";
import "./Header.css";
import Pokeball from "/pokeball.svg";
import Hashtag from '/hashtag.svg';
import Search from '/search.svg';

function Header(onChange) {
  return (
    <>
      <div className="header">
        <img className="pokeball-img" src={Pokeball} alt="pokeball" />
        <h1>Pokédex</h1>
      </div>
      <div className="search">
      <img className="search-icon" src={Search}/>
        <input onChange={onChange} className="searchBar" type="search" placeholder="Search"/>
        <button><img className="sort" src={Hashtag}/></button>
      </div>
    </>
  );
}

export default Header;
