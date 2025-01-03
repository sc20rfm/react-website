import React from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import Basket from '../components/Basket'; // Import Basket component
import '../styles/Menu.css';

function Menu({ onAddToBasket, basket }) { // Pass the basket as a prop
  return (
    <div className="menuPage"> {/* Apply the menuPage CSS layout */}
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              onAddToBasket={() => onAddToBasket(menuItem)} // Passing the function to add to basket
            />
          ))}
        </div>
      </div>
      <Basket basket={basket} /> {/* Include the Basket component */}
    </div>
  );
}

export default Menu;
