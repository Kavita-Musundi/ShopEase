import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container cart-empty">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/products" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-grid">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3 className="cart-item-title">{item.name}</h3>
                <p className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</p>
                <div className="cart-item-quantity">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
              </div>
            <div className="cart-item-total">
  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
</div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="btn-remove"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{cartTotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
           <span>₹{cartTotal.toLocaleString('en-IN')}</span>
          </div>
          <Link to="/checkout" className="btn btn-primary checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;