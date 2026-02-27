import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      width: '250px',
      display: 'inline-block',
      backgroundColor: 'white',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={product.image || 'https://via.placeholder.com/250x200/4A90E2/FFFFFF?text=Product+Image'} 
        alt={product.name}
        style={{ 
          width: '100%', 
          height: '200px', 
          objectFit: 'cover',
          borderRadius: '5px',
          marginBottom: '10px'
        }}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/250x200/4A90E2/FFFFFF?text=Image+Not+Found';
        }}
      />
      <h3 style={{ margin: '10px 0', fontSize: '18px', color: '#333' }}>{product.name}</h3>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px', height: '40px', overflow: 'hidden' }}>
        {product.description}
      </p>
      <p style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        color: '#007bff',
        margin: '10px 0'
      }}>
        ₹{product.price}
      </p>
      <button 
        onClick={() => addToCart(product)}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
          fontSize: '16px'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;