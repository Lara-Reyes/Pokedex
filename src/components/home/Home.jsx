import React from 'react'
import './Home.css'
import Header from './header/Header'
import Item from './item/Item'

function Home() {
  return (
    <div className='home-page'>
   <Header/>
   <div className='main'>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
   </div>
    </div>
  )
}

export default Home