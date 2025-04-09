import React, { useContext } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router';
import { StoreContext } from '../../components/Context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const deliveryFee = 300;

  // Subtotal Calculation
  const subtotal = food_list?.reduce((acc, item) => {
    if (cartItems?.[item._id]) {
      return acc + item.price * cartItems[item._id];
    }
    return acc;
  }, 0);

  const total = subtotal + deliveryFee;

  return (
    <div>
      <div className="cart">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list?.map((item, index) => {
          if (item && cartItems?.[item._id] > 0) {
            return (
              <div key={index} className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>Rs.{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>Rs.{item.price * cartItems[item._id]}</p>
                <p className="remove-btn" onClick={() => removeFromCart(item._id)}>x</p>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
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
          <button className="checkout" onClick={() => navigate('/order')}>
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
