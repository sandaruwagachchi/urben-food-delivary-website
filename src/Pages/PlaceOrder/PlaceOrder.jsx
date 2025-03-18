import React, { useState } from 'react'
import './PlaceOrder.css'

const PlaceOrder = () => {

   const [cardNumber, setCardNumber] = useState('');
   const [expiryDate, setExpiryDate] = useState('');
   const [cvv, setCvv] = useState('');
   const [name, setName] = useState('');
   const [error, setError] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!cardNumber || !expiryDate || !cvv || !name) {
        setError('Please fill in all the fields');
        return;
      }
  
      if (!/^\d{16}$/.test(cardNumber)) {
        setError('Card number must be 16 digits');
        return;
      }
  
      if (!/^\d{3}$/.test(cvv)) {
        setError('CVV must be 3 digits');
        return;
      }
  
      if (!/\d{2}\/\d{2}/.test(expiryDate)) {
        setError('Expiry date must be in MM/YY format');
        return;
      }
  
      // You can send data to the backend here
      console.log('Payment Successful', { cardNumber, expiryDate, cvv, name });
      setError('');
      alert('Payment successful!');
    };
  return (
  <form className='place-order'>
   <div className="place-order-left">
   <div className="payment-form-container">
      <h2>Card Payment</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Cardholder Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter your card number"
            maxLength="16"
            required
          />
        </div>

        <div className="form-group">
          <label>Expiry Date (MM/YY)</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </div>

        <div className="form-group">
          <label>CVV</label>
          <input
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength="3"
            placeholder="CVV"
            required
          />
        </div>
      </form>
    </div>
   </div>
   <div className="place-order-right">
   <div className="cart-total">
         <h2>Cart Totals</h2>
      <div>
      <div className="cart-total-details">
         <p>Subtotal</p>
         <p>{0}</p>
      </div>
      <hr/>
      <div className="cart-total-details">
         <p>Delivary Fee</p>
         <p>{2}</p>
      </div>
      <hr/>
      <div className="cart-total-details">
         <b>Total</b>
         <b>{0}</b>
      </div>
   </div>
   <button className='payment-btn'>PAYMENT</button>
   </div>
   </div>
  </form>
  )
}

export default PlaceOrder
