import React from 'react'
import './Item.css'
import { useNavigate } from 'react-router-dom'

function Item(props) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/pokemones/${props.name}`)
  }
  
  return (
    <div  onClick={onClick} className='item' style={{backgroundColor:props.color}}>
        <div className='id-img'>
            <p className='pokemon-id' style={{color:props.color}}>#{props.id}</p>
            <img className='imagen-pokemon'  src={props.image}/>
        </div>
            <p className='pokemon-name'>{props.name}</p>
        </div>
  )
}

export default Item