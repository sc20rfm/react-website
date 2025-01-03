import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate hook for page navigation
import '../styles/Basket.css';

function Basket({ basket }) {
  // Calculate the total price of all items in the basket using the reduce method
  const total = basket.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  // Hook to navigate to different pages
  const navigate = useNavigate();

  // Handle the "Pay Now" button click by navigating to the payment page
  const handlePayClick = () => {
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <div className="basket">
      <h2>Your Basket</h2>

      {/* Check if the basket is empty and display an appropriate message */}
      {basket.length === 0 ? (
        <p className="emptyBasket">Your basket is empty.</p>
      ) : (
        <>
          {/* Display a list of items in the basket */}
          <ul className="basketList">
            {basket.map((item, index) => (
              <li key={index} className="basketItem">
                <div className="basketItemDetails">
                  {/* Display item name and price */}
                  <span className="basketItemName">{item.name}</span>
                  <span className="basketItemPrice">£{item.price}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Display the total cost of the basket */}
          <div className="basketTotal">
            <span>Total:</span>
            <span>£{total}</span>
          </div>

          {/* Button to initiate payment */}
          <div className="buttonWrapper">
            <button className="payButton" onClick={handlePayClick}>
              Pay Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Basket;
