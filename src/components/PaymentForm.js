import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/PaymentForm.css';

function PaymentForm({ basket }) {
  // State hooks for user input and error message
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate(); // Hook for navigation to the home page after payment

  // Function to validate the form inputs
  const validateForm = () => {
    // Check if the name is empty
    if (!name.trim()) {
      setErrorMessage('Name on card is required.');
      return false;
    }
    // Validate the card number (must be 16 digits)
    if (!/^\d{16}$/.test(cardNumber)) {
      setErrorMessage('Card number must be 16 digits.');
      return false;
    }
    // Validate the expiry date (must be in MM/YY format)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      setErrorMessage('Expiry date must be in the format MM/YY.');
      return false;
    }
    // Validate the CVV (must be 3 or 4 digits)
    if (!/^\d{3,4}$/.test(cvv)) {
      setErrorMessage('CVV must be 3 or 4 digits.');
      return false;
    }
    setErrorMessage(''); // Clear the error message if all validations pass
    return true; // All validations are successful
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (validateForm()) { // If the form is valid
      alert('Payment successful!'); // Show a success message (you can replace this with actual payment logic)
      navigate('/'); // Redirect to the home page after successful payment
    }
  };

  return (
    <div className="paymentForm">
      <h2>Payment Form</h2>
      
      {/* Display error message if validation fails */}
      {errorMessage && <p className="error">{errorMessage}</p>}
      
      {/* Form for payment details */}
      <form onSubmit={handleSubmit}>
        <label>Name on Card</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state
          required
        />

        <label>Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)} // Update cardNumber state
          required
          maxLength="16" // Limit the input to 16 digits
        />

        <label>Expiry Date (MM/YY)</label>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)} // Update expiryDate state
          required
          placeholder="MM/YY" // Placeholder text for format guidance
        />

        <label>CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)} // Update cvv state
          required
          maxLength="4" // Limit the input to 3 or 4 digits
        />

        {/* Display the total price from the basket and the submit button */}
        <button type="submit">
          Pay £{basket.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;
