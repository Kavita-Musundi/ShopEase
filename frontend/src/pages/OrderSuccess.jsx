import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>✅</div>
        <h1 style={styles.title}>Order Placed Successfully!</h1>
        <p style={styles.message}>
          Thank you for your purchase! We've sent a confirmation email with your order details.
        </p>
        <div style={styles.details}>
          <p>Your order will be delivered within 3-5 business days.</p>
        </div>
        <div style={styles.buttons}>
          <Link to="/products" style={styles.primaryButton}>
            Continue Shopping
          </Link>
          <Link to="/orders" style={styles.secondaryButton}>
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
  card: {
    background: 'white',
    borderRadius: '10px',
    padding: '40px',
    boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    textAlign: 'center'
  },
  icon: {
    fontSize: '4rem',
    marginBottom: '20px'
  },
  title: {
    color: '#28a745',
    marginBottom: '20px',
    fontSize: '1.8rem'
  },
  message: {
    color: '#666',
    marginBottom: '20px',
    lineHeight: '1.6'
  },
  details: {
    background: '#f8f9fa',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '25px',
    color: '#333'
  },
  buttons: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center'
  },
  primaryButton: {
    padding: '12px 25px',
    background: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background 0.3s'
  },
  secondaryButton: {
    padding: '12px 25px',
    background: '#6c757d',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background 0.3s'
  }
};

export default OrderSuccess;