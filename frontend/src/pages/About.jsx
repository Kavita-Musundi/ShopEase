import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>About ShopEase</h1>
        <p>Your Trusted Online Shopping Partner Since 2026</p>
      </div>
      
      <div style={styles.content}>
        <div style={styles.section}>
          <h2>Our Story</h2>
          <p>
            ShopEase was founded in 2026 with a simple mission: to make online shopping 
            easy, affordable, and enjoyable for everyone in India. What started as a small 
            team of passionate developers has grown into a trusted e-commerce platform 
            serving thousands of customers across the country.
          </p>
        </div>
        
        <div style={styles.section}>
          <h2>Our Mission</h2>
          <p>
            We strive to provide the best shopping experience by offering high-quality 
            products at competitive prices, with fast delivery and exceptional customer 
            service. We believe that everyone deserves access to great products without 
            breaking the bank.
          </p>
        </div>
        
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>10,000+</div>
            <div style={styles.statLabel}>Happy Customers</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>1,000+</div>
            <div style={styles.statLabel}>Products</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Brands</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>24/7</div>
            <div style={styles.statLabel}>Support</div>
          </div>
        </div>
        
        <div style={styles.section}>
          <h2>Why Choose Us?</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🚚</div>
              <h3>Free Shipping</h3>
              <p>On orders over ₹500</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🔒</div>
              <h3>Secure Payments</h3>
              <p>100% secure transactions</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>💯</div>
              <h3>Quality Guarantee</h3>
              <p>7-day return policy</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>⚡</div>
              <h3>Fast Delivery</h3>
              <p>2-3 business days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
    padding: '40px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '10px'
  },
  content: {
    background: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  section: {
    marginBottom: '40px'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginBottom: '40px'
  },
  statCard: {
    textAlign: 'center',
    padding: '20px',
    background: '#f8f9fa',
    borderRadius: '8px'
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: '5px'
  },
  statLabel: {
    color: '#666'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginTop: '20px'
  },
  featureCard: {
    textAlign: 'center',
    padding: '20px',
    background: '#f8f9fa',
    borderRadius: '8px'
  },
  featureIcon: {
    fontSize: '2rem',
    marginBottom: '10px'
  }
};

export default About;