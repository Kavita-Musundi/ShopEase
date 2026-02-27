
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const Checkout = ({ user }) => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      navigate('/login');
      return;
    }

    setLoading(true);

    try {
      const orderData = {
        products: cart.map(item => ({
          product: item._id,
          quantity: item.quantity,
          price: item.price
        })),
        totalAmount: cartTotal,
        shippingAddress: formData,
        paymentMethod: 'Cash on Delivery'
      };

      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/orders', orderData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      clearCart();
      alert('Order placed successfully!');
      navigate('/products');
    } catch (error) {
      alert('Order failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    navigate('/products');
    return null;
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <h1 style={styles.title}>Checkout</h1>
        
        <div style={styles.grid}>
          <div style={styles.formSection}>
            <h2 style={styles.subtitle}>Shipping Information</h2>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              
              <div style={styles.row}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label}>Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>
              </div>
              
              <button type="submit" style={styles.button} disabled={loading}>
                {loading ? 'Processing...' : 'Place Order'}
              </button>
            </form>
          </div>
          
          <div style={styles.summarySection}>
            <h2 style={styles.subtitle}>Order Summary</h2>
            {cart.map(item => (
              <div key={item._id} style={styles.summaryItem}>
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div style={styles.total}>
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    background: '#f8f9fa',
    minHeight: 'calc(100vh - 80px)'
  },
  innerContainer: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '40px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '30px'
  },
  formSection: {
    background: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  summarySection: {
    background: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    height: 'fit-content'
  },
  subtitle: {
    marginBottom: '20px',
    color: '#333'
  },
  formGroup: {
    marginBottom: '20px',
    flex: 1
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: '500',
    color: '#333'
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '2px solid #e1e1e1',
    borderRadius: '5px',
    fontSize: '1rem'
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px'
  },
  button: {
    width: '100%',
    padding: '12px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px'
  },
  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #eee'
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    paddingTop: '20px',
    marginTop: '10px',
    borderTop: '2px solid #333'
  }
};

export default Checkout;