import React from 'react'
import './Header.css'
import Pokeball from '/Pokeball.png'

function Header() {
  return (
    <div>
    <img className='pokeball-img' src={Pokeball} alt="pokeball" />
    </div>
  )
}

export default Header