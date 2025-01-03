import React from 'react'; // Import React library
import '../styles/MenuItem.css'; // Import the CSS styles for the MenuItem component

function MenuItem({ image, name, price, onAddToBasket }) {
  return (
    <div className='menuItem'> {/* Container for the menu item */}
      
      {/* Display the image of the menu item */}
      <div className='menuImage' style={{ backgroundImage: `url(${image})` }}></div>
      
      {/* Display the name of the menu item */}
      <h1>{name}</h1>
      
      {/* Display the price of the menu item */}
      <p>£{price}</p>
      
      {/* Button to add the item to the basket */}
      <button 
        className='addButton' 
        onClick={() => onAddToBasket({ name, price, image })} // Trigger onAddToBasket with item details
      >
        Add to Basket
      </button>
    </div>
  );
}

export default MenuItem;
