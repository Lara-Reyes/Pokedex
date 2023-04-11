import React from 'react'
import './Item.css'

function Item(props) {
  return (
    <div className='item' style={{backgroundColor:props.color}}>
        <div className='id-img'>
            <p className='pokemon-id'>{props.id}</p>
            <img className='imagen-pokemon'  src={props.image}/>
        </div>
            <p className='pokemon-name'>{props.name}</p>
        </div>
  )
}

export default Item