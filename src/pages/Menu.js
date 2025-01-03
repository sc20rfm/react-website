import React from 'react';
import { MenuList } from '../helpers/MenuList'; 
import MenuItem from '../components/MenuItem'; 
import Basket from '../components/Basket'; 
import '../styles/Menu.css'; 

function Menu({ onAddToBasket, basket }) { // Destructure props to get the function to add items to basket and the basket itself
  return (
    <div className="menuPage"> 
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1> 
        
        {/* Container for the list of menu items */}
        <div className="menuList">
          {/* Loop through MenuList and render a MenuItem for each item */}
          {MenuList.map((menuItem, key) => (
            <MenuItem
              key={key} 
              image={menuItem.image}
              name={menuItem.name} 
              price={menuItem.price}
              onAddToBasket={() => onAddToBasket(menuItem)} // Pass the onAddToBasket function to handle adding this item to the basket
            />
          ))}
        </div>
      </div>
      
      {/* Render the Basket component, passing the basket as a prop */}
      <Basket basket={basket} /> {/* Display the current contents of the basket */}
    </div>
  );
}

export default Menu; 
