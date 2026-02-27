import React, { useState, useEffect } from 'react';

const TestPrice = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        console.log('Raw data from backend:', data);
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>🔍 Price Test Page</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>Check console for raw data (F12)</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {products.map(p => (
          <div key={p._id} style={{ 
            border: '2px solid #ff4444', 
            borderRadius: '10px',
            padding: '15px',
            background: '#fff',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginTop: 0, color: '#333' }}>{p.name}</h3>
            <p><strong>Raw Price:</strong> <code style={{ background: '#f0f0f0', padding: '2px 5px' }}>{p.price}</code></p>
            <p><strong>Type:</strong> {typeof p.price}</p>
            <p><strong>With $:</strong> <span style={{ color: 'red' }}>${p.price}</span></p>
            <p><strong>With ₹ (direct):</strong> <span style={{ color: 'green', fontSize: '20px' }}>₹{p.price}</span></p>
            <p><strong>With ₹ (unicode):</strong> <span style={{ color: 'blue', fontSize: '20px' }}>{'\u20B9'}{p.price}</span></p>
            <p><strong>Formatted:</strong> <span style={{ color: 'purple', fontSize: '24px' }}>₹{Number(p.price).toLocaleString('en-IN')}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestPrice;