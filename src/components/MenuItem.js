import React from 'react';
import '../styles/MenuItem.css';

function MenuItem({ image, name, price, onAddToBasket }) {
  return (
    <div className='menuItem'>
      <div className='menuImage' style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>£{price}</p>
      <button className='addButton' onClick={() => onAddToBasket({ name, price, image })}>
        Add to Basket
      </button>
    </div>
  );
}

export default MenuItem;
