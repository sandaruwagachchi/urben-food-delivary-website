import React, { useState } from 'react';
import './PlaceOrder.css';
import { useLocation } from 'react-router';

const PlaceOrder = () => {
  const { state } = useLocation();
  // Expecting orderID from state along with subtotal, deliveryFee, total
  const { orderID, subtotal, deliveryFee, total } = state || {};

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (paymentMethod === 'card') {
      if (!cardNumber || !expiryDate || !cvv || !name) {
        setError('Please fill all card informations');
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
        setError('Expiry date must be in MM/YY format.');
        return;
      }
    }

    setError('');

    const paymentData = {
      orderID: orderID, // Dynamic orderID from created order
      paymentMethod: paymentMethod,
      amount: parseInt(total),
      paymentDate: new Date(),
      status: "Pending"
    };

    try {
      const response = await fetch('http://localhost:8081/api/payments', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData)
      });

      if (response.ok) {
        alert(paymentMethod === 'card' ? 'Card payment is successful!' : 'Payment confirmed!');
        console.log("Payment sent:", paymentData);
      } else {
        const errorMsg = await response.text();
        console.error("Server Error:", errorMsg);
        setError("Card payment is Unsuccessful. Try again later.");
      }
    } catch (err) {
      console.error("Network Error:", err);
      setError("Network error. Try again later.");
    }
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <div className="payment-form-container">
          <h2>Payment</h2>
          {error && <div className="error-message">{error}</div>}

          <div className="form-group payment-method-selection">
            <label className={`payment-method ${paymentMethod === 'card' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('card')}>
              <input type="radio" value="card" checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')} className="payment-radio" />
              <span className="payment-label">Card</span>
            </label>

            <label className={`payment-method ${paymentMethod === 'cash' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('cash')}>
              <input type="radio" value="cash" checked={paymentMethod === 'cash'}
                onChange={() => setPaymentMethod('cash')} className="payment-radio" />
              <span className="payment-label">Cash</span>
            </label>
          </div>

          {paymentMethod === 'card' && (
            <>
              <div className="form-group">
                <label>Cardholder Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name" required />
              </div>

              <div className="form-group">
                <label>Card Number</label>
                <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="Enter your card number" maxLength="16" required />
              </div>

              <div className="form-group">
                <label>Expiry Date (MM/YY)</label>
                <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YY" required />
              </div>

              <div className="form-group">
                <label>CVV</label>
                <input type="password" value={cvv} onChange={(e) => setCvv(e.target.value)}
                  maxLength="3" placeholder="CVV" required />
              </div>
            </>
          )}

          {paymentMethod === 'cash' && (
            <div className="form-group">
              <p>Cash payment confirmed! Total Price: Rs.{total}</p>
            </div>
          )}

          <button className="payment-btn" type="submit">
            {paymentMethod === 'card' ? 'Pay with Card' : 'Confirm Cash Payment'}
          </button>
        </div>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs.{subtotal}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs.{deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs.{total}</b>
            </div>
          </div>
        </div>
        <button className="cancel-Order">
          Cancel Order
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
