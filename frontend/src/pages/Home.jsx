import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Welcome to <span style={styles.brandName}>ShopEase</span>
          </h1>
          <p style={styles.heroSubtitle}>
            India's Favorite Online Shopping Destination
          </p>
          <p style={styles.heroDescription}>
            Discover amazing products at unbeatable prices. Free shipping on orders over ₹500!
          </p>
          <div style={styles.heroButtons}>
            <Link to="/products" style={styles.primaryButton}>
              Shop Now
            </Link>
            <Link to="/about" style={styles.secondaryButton}>
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🚚</div>
            <h3 style={styles.featureTitle}>Free Shipping</h3>
            <p style={styles.featureDescription}>On orders over ₹500</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔒</div>
            <h3 style={styles.featureTitle}>Secure Payments</h3>
            <p style={styles.featureDescription}>100% secure transactions</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>💯</div>
            <h3 style={styles.featureTitle}>Quality Guarantee</h3>
            <p style={styles.featureDescription}>7-day return policy</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>⚡</div>
            <h3 style={styles.featureTitle}>Fast Delivery</h3>
            <p style={styles.featureDescription}>2-3 business days</p>
          </div>
        </div>
      </div>

    <Link to="/products?category=Home & Kitchen" style={styles.categoryCard}>
  <div style={styles.categoryIcon}>🏠</div>
  <h3 style={styles.categoryName}>Home & Kitchen</h3>
</Link>
<Link to="/products?category=Appliances" style={styles.categoryCard}>
  <div style={styles.categoryIcon}>⚡</div>
  <h3 style={styles.categoryName}>Appliances</h3>
</Link>
<Link to="/products?category=Fashion" style={styles.categoryCard}>
  <div style={styles.categoryIcon}>👕</div>
  <h3 style={styles.categoryName}>Fashion</h3>
</Link>
<Link to="/products?category=Footwear" style={styles.categoryCard}>
  <div style={styles.categoryIcon}>👟</div>
  <h3 style={styles.categoryName}>Footwear</h3>
</Link>
<Link to="/products?category=Electronics" style={styles.categoryCard}>
  <div style={styles.categoryIcon}>📱</div>
  <h3 style={styles.categoryName}>Electronics</h3>
</Link>
<Link to="/products?category=Groceries" style={styles.categoryCard}>
  <div style={styles.categoryIcon}>🍎</div>
  <h3 style={styles.categoryName}>Groceries</h3>
</Link>
<Link to="/products?category=Beauty" style={styles.categoryCard}>
  <div style={styles.categoryIcon}>💄</div>
  <h3 style={styles.categoryName}>Beauty</h3>
</Link>
<Link to="/products?category=Personal Care" style={styles.categoryCard}>
  <div style={styles.categoryIcon}>✂️</div>
  <h3 style={styles.categoryName}>Personal Care</h3>
</Link>
<Link to="/products?category=Books" style={styles.categoryCard}>
  <div style={styles.categoryIcon}>📚</div>
  <h3 style={styles.categoryName}>Books</h3>
</Link>
<Link to="/products?category=Sports" style={styles.categoryCard}>
  <div style={styles.categoryIcon}>🏏</div>
  <h3 style={styles.categoryName}>Sports</h3>
</Link>
      {/* Special Offers Section */}
      <div style={styles.offersSection}>
        <div style={styles.offerCard}>
          <div style={styles.offerContent}>
            <h3 style={styles.offerTitle}>Summer Sale!</h3>
            <p style={styles.offerDescription}>Get up to 50% off on latest collection</p>
            <p style={styles.offerCode}>Use Code: SUMMER50</p>
            <Link to="/products" style={styles.offerButton}>Shop Now</Link>
          </div>
        </div>
        <div style={styles.offerCard}>
          <div style={styles.offerContent}>
            <h3 style={styles.offerTitle}>New User Offer</h3>
            <p style={styles.offerDescription}>Get 20% off on your first order</p>
            <p style={styles.offerCode}>Min. purchase ₹999</p>
            <Link to="/register" style={styles.offerButton}>Join Now</Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={styles.statsSection}>
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
      </div>

      {/* Testimonials Section */}
      <div style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What Our Customers Say</h2>
        <div style={styles.testimonialsGrid}>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>"Amazing products and super fast delivery. Highly recommend!"</p>
            <div style={styles.testimonialAuthor}>- Rahul K.</div>
            <div style={styles.testimonialRating}>⭐⭐⭐⭐⭐</div>
          </div>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>"Great quality products at affordable prices. Will shop again!"</p>
            <div style={styles.testimonialAuthor}>- Priya S.</div>
            <div style={styles.testimonialRating}>⭐⭐⭐⭐⭐</div>
          </div>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>"Excellent customer service and quick resolution of issues."</p>
            <div style={styles.testimonialAuthor}>- Amit M.</div>
            <div style={styles.testimonialRating}>⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div style={styles.newsletterSection}>
        <div style={styles.newsletterContent}>
          <h2 style={styles.newsletterTitle}>Subscribe to Our Newsletter</h2>
          <p style={styles.newsletterDescription}>
            Get updates about new products and special offers
          </p>
          <div style={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.newsletterInput}
            />
            <button style={styles.newsletterButton}>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div style={styles.trustSection}>
        <div style={styles.trustGrid}>
          <div style={styles.trustItem}>
            <span style={styles.trustIcon}>🛡️</span>
            <span>Secure Payments</span>
          </div>
          <div style={styles.trustItem}>
            <span style={styles.trustIcon}>🚚</span>
            <span>Free Shipping ₹500+</span>
          </div>
          <div style={styles.trustItem}>
            <span style={styles.trustIcon}>🔄</span>
            <span>7-Day Returns</span>
          </div>
          <div style={styles.trustItem}>
            <span style={styles.trustIcon}>💬</span>
            <span>24/7 Support</span>
          </div>
          <div style={styles.trustItem}>
            <span style={styles.trustIcon}>🇮🇳</span>
            <span>Made in India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif'
  },
  
  // Hero Section
  heroSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '100px 20px',
    textAlign: 'center'
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  heroTitle: {
    fontSize: '3.5rem',
    marginBottom: '20px',
    animation: 'fadeInDown 1s ease'
  },
  brandName: {
    color: '#ffd700'
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    opacity: 0.9
  },
  heroDescription: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    opacity: 0.9,
    lineHeight: '1.6'
  },
  heroButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center'
  },
  primaryButton: {
    padding: '15px 40px',
    background: '#ffd700',
    color: '#333',
    textDecoration: 'none',
    borderRadius: '25px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease'
  },
  secondaryButton: {
    padding: '15px 40px',
    background: 'transparent',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '25px',
    fontSize: '1.1rem',
    border: '2px solid white',
    transition: 'transform 0.3s ease'
  },

  // Features Section
  featuresSection: {
    padding: '80px 20px',
    background: '#f8f9fa'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '50px'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  featureCard: {
    background: 'white',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease'
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '15px'
  },
  featureTitle: {
    fontSize: '1.3rem',
    marginBottom: '10px',
    color: '#333'
  },
  featureDescription: {
    color: '#666',
    lineHeight: '1.6'
  },

  // Categories Section
  categoriesSection: {
    padding: '80px 20px',
    background: 'white'
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  categoryCard: {
    background: '#f8f9fa',
    padding: '25px',
    borderRadius: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#333',
    transition: 'transform 0.3s ease',
    border: '1px solid #eee'
  },
  categoryIcon: {
    fontSize: '2.5rem',
    marginBottom: '10px'
  },
  categoryName: {
    fontSize: '1.1rem',
    fontWeight: '500'
  },

  // Offers Section
  offersSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  offerCard: {
    background: 'linear-gradient(135deg, #ffd700 0%, #ffa500 100%)',
    borderRadius: '10px',
    padding: '30px',
    textAlign: 'center'
  },
  offerContent: {
    color: '#333'
  },
  offerTitle: {
    fontSize: '1.8rem',
    marginBottom: '15px'
  },
  offerDescription: {
    fontSize: '1.1rem',
    marginBottom: '10px'
  },
  offerCode: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    background: 'rgba(0,0,0,0.1)',
    padding: '5px',
    borderRadius: '5px'
  },
  offerButton: {
    display: 'inline-block',
    padding: '10px 30px',
    background: '#333',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px'
  },

  // Stats Section
  statsSection: {
    padding: '60px 20px',
    background: '#f8f9fa'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  statCard: {
    textAlign: 'center',
    padding: '20px'
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: '10px'
  },
  statLabel: {
    fontSize: '1.1rem',
    color: '#666'
  },

  // Testimonials Section
  testimonialsSection: {
    padding: '80px 20px',
    background: 'white'
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  testimonialCard: {
    background: '#f8f9fa',
    padding: '25px',
    borderRadius: '10px',
    textAlign: 'center'
  },
  testimonialText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#666',
    marginBottom: '15px',
    fontStyle: 'italic'
  },
  testimonialAuthor: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px'
  },
  testimonialRating: {
    color: '#ffd700'
  },

  // Newsletter Section
  newsletterSection: {
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    textAlign: 'center'
  },
  newsletterContent: {
    maxWidth: '600px',
    margin: '0 auto'
  },
  newsletterTitle: {
    fontSize: '2rem',
    color: 'white',
    marginBottom: '20px'
  },
  newsletterDescription: {
    fontSize: '1.1rem',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '30px'
  },
  newsletterForm: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center'
  },
  newsletterInput: {
    padding: '15px',
    width: '300px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem'
  },
  newsletterButton: {
    padding: '15px 30px',
    background: '#ffd700',
    color: '#333',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer'
  },

  // Trust Section
  trustSection: {
    padding: '40px 20px',
    background: '#333',
    color: 'white'
  },
  trustGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '1rem'
  },
  trustIcon: {
    fontSize: '1.2rem'
  }
};

export default Home;