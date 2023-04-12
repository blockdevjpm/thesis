import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-img'>{props.picture}</div>
      <span className="card_name">{props.displayName}</span>
      <span className="card_waste">{props.waste}</span>
      <span className="card_earned">{props.earned}</span>
    </div>
  )
}

export default Card