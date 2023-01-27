import React from 'react'
import "./card.css"
import img from "../Img/cards.svg"



function Cards(props) {
  return (
    <div className='card'>
        <h1 className='h1'>{props.name}</h1>
        <div className="cards">
        <div className="card-1">
            <img className='img' src={img} alt="" />
            <h3 className='h3'> Space Academy Marketing, SMM Tashkent</h3>
         </div>
         <div className="card-1">
            <img className='img' src={img} alt="" />
            <h3 className='h3'> Space Academy Marketing, SMM Tashkent</h3>
         </div>
         <div className="card-1">
            <img className='img' src={img} alt="" />
            <h3 className='h3'>Space Academy Marketing, SMM Tashkent</h3>
         </div>
        </div>
    </div>
  )
}

export default Cards