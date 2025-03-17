import React, { useContext } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router'
//import {StoreContext} from '../../components/StoreContext/StoreContext';

const Cart = () => {

   //const{cartItems, food_list, removeFromCart} = useContext(StoreContext);
   const navigate = useNavigate(); 

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
      <br/>
      <hr/>
   </div>
   <div className="cart-bottom">
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
         <p>RS:{300}</p>
      </div>
      <hr/>
      <div className="cart-total-details">
         <b>Total</b>
         <b>{0}</b>
      </div>
   </div>
   <button onClick={()=>navigate('/order')}>CHECKOUT</button>
   </div>
   </div>
   </div>
  )
}

export default Cart
