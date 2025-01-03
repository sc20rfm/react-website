import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/Payment.css';

function PaymentForm({ basket }) {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name.trim()) {
      setErrorMessage('Name on card is required.');
      return false;
    }
    if (!/^\d{16}$/.test(cardNumber)) {
      setErrorMessage('Card number must be 16 digits.');
      return false;
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      setErrorMessage('Expiry date must be in the format MM/YY.');
      return false;
    }
    if (!/^\d{3,4}$/.test(cvv)) {
      setErrorMessage('CVV must be 3 or 4 digits.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Payment successful!');
      navigate('/'); // Redirect to the home page
    }
  };

  return (
    <div className="paymentForm">
      <h2>Payment Form</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name on Card</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
          maxLength="16"
        />

        <label>Expiry Date (MM/YY)</label>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
          placeholder="MM/YY"
        />

        <label>CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
          maxLength="4"
        />

        <button type="submit">
          Pay £{basket.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;
