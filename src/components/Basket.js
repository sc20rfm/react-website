import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import '../styles/Basket.css';

function Basket({ basket }) {
  const total = basket.reduce((sum, item) => sum + item.price, 0).toFixed(2); // Calculate total
  const navigate = useNavigate(); // Use navigate for navigation

  // Handle pay button click
  const handlePayClick = () => {
    navigate('/payment'); // Navigate to payment page
  };

  return (
    <div className="basket">
      <h2>Your Basket</h2>
      {basket.length === 0 ? (
        <p className="emptyBasket">Your basket is empty.</p>
      ) : (
        <>
          <ul className="basketList">
            {basket.map((item, index) => (
              <li key={index} className="basketItem">
                <div className="basketItemDetails">
                  <span className="basketItemName">{item.name}</span>
                  <span className="basketItemPrice">£{item.price}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="basketTotal">
            <span>Total:</span>
            <span>£{total}</span>
          </div>
          <button className="payButton" onClick={handlePayClick}>Pay Now</button> {/* Pay button */}
        </>
      )}
    </div>
  );
}

export default Basket;
