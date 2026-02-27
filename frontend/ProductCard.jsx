import React from 'react';

const ProductCard = ({ product }) => {
  // Force rupee symbol using Unicode
  const rupee = '\u20B9';
  
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      width: '250px',
      display: 'inline-block',
      backgroundColor: 'white'
    }}>
      <img 
        src={product.image} 
        alt={product.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }}
      />
      <h3 style={{ margin: '10px 0', fontSize: '18px' }}>{product.name}</h3>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
        {product.description}
      </p>
      <p style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        color: '#007bff',
        margin: '10px 0'
      }}>
        {rupee} {product.price}
      </p>
      <button style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        fontSize: '16px'
      }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;