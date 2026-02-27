import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderHistory = ({ user }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/orders/myorders', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div style={styles.loading}>Loading orders...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Orders</h1>
      
      {orders.length === 0 ? (
        <div style={styles.empty}>
          <p>You haven't placed any orders yet.</p>
          <a href="/products" style={styles.shopLink}>Start Shopping</a>
        </div>
      ) : (
        <div style={styles.ordersList}>
          {orders.map(order => (
            <div key={order._id} style={styles.orderCard}>
              <div style={styles.orderHeader}>
                <span style={styles.orderId}>Order #{order._id.slice(-8)}</span>
                <span style={styles.orderDate}>
                  {new Date(order.createdAt).toLocaleDateString('en-IN')}
                </span>
              </div>
              
              <div style={styles.orderItems}>
                {order.products.map((item, idx) => (
                  <div key={idx} style={styles.orderItem}>
                    <span>{item.product?.name} x {item.quantity}</span>
                    <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>
              
              <div style={styles.orderFooter}>
                <div>
                  <span style={styles.statusLabel}>Status: </span>
                  <span style={{
                    ...styles.status,
                    background: order.orderStatus === 'delivered' ? '#d4edda' : '#fff3cd',
                    color: order.orderStatus === 'delivered' ? '#155724' : '#856404'
                  }}>
                    {order.orderStatus}
                  </span>
                </div>
                <div style={styles.orderTotal}>
                  Total: ₹{order.totalAmount.toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333'
  },
  ordersList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  orderCard: {
    background: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  orderHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee'
  },
  orderId: {
    fontWeight: 'bold',
    color: '#333'
  },
  orderDate: {
    color: '#666'
  },
  orderItems: {
    marginBottom: '15px'
  },
  orderItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 0',
    color: '#666'
  },
  orderFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '15px',
    borderTop: '1px solid #eee'
  },
  statusLabel: {
    color: '#666'
  },
  status: {
    padding: '3px 8px',
    borderRadius: '3px',
    fontSize: '12px',
    marginLeft: '5px'
  },
  orderTotal: {
    fontWeight: 'bold',
    color: '#007bff'
  },
  loading: {
    textAlign: 'center',
    padding: '50px',
    fontSize: '1.2rem',
    color: '#666'
  },
  empty: {
    textAlign: 'center',
    padding: '50px',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  shopLink: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 30px',
    background: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px'
  }
};

export default OrderHistory;