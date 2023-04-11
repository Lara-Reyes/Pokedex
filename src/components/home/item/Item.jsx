import React from 'react'
import './Item.css'
import Silhouette from '../../../../public/silhoutte.svg'

function Item() {
  return (
    <div className='item'>
        <div className='id-img'>
            <p className='pokemon-id'>#999</p>
            <img className='imagen-pokemon' src={Silhouette}/>
        </div>
            <p className='pokemon-name'>Pokemon Name</p>
    </div>
  )
}

export default Item