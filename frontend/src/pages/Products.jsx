import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { addToCart } = useCart();
  const location = useLocation();

  // Get category from URL query parameter
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get('category');

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products when category changes
    if (selectedCategory && products.length > 0) {
      const filtered = products.filter(product => 
        product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
      
      // Extract unique categories
      const uniqueCategories = [...new Set(response.data.map(p => p.category))];
      setCategories(uniqueCategories);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div style={styles.loading}>Loading products...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        {selectedCategory ? `${selectedCategory} Products` : 'All Products'}
      </h1>
      
      {/* Category Filter Chips */}
      <div style={styles.categoryFilter}>
        <a 
          href="/products" 
          style={{
            ...styles.categoryChip,
            ...(!selectedCategory ? styles.activeCategory : {})
          }}
        >
          All
        </a>
        {categories.map(cat => (
          <a
            key={cat}
            href={`/products?category=${encodeURIComponent(cat)}`}
            style={{
              ...styles.categoryChip,
              ...(selectedCategory === cat ? styles.activeCategory : {})
            }}
          >
            {cat}
          </a>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <p style={styles.noProducts}>No products found in this category.</p>
      ) : (
        <div style={styles.productsGrid}>
          {filteredProducts.map(product => (
            <ProductCard 
              key={product._id} 
              product={product} 
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '30px'
  },
  categoryFilter: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '40px'
  },
  categoryChip: {
    padding: '8px 16px',
    background: '#f0f0f0',
    color: '#333',
    textDecoration: 'none',
    borderRadius: '20px',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  activeCategory: {
    background: '#007bff',
    color: 'white'
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px',
    justifyContent: 'center'
  },
  loading: {
    textAlign: 'center',
    padding: '50px',
    fontSize: '1.2rem',
    color: '#666'
  },
  noProducts: {
    textAlign: 'center',
    padding: '50px',
    color: '#666'
  }
};

export default Products;