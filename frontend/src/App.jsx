import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import OrderHistory from './pages/OrderHistory';
import OrderSuccess from './pages/OrderSuccess';
import Contact from './pages/Contact';
import About from './pages/About';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get('http://localhost:5000/api/auth/profile')
        .then(response => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem('token');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Navbar user={user} setUser={setUser} />
          <main className="main-content">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/register" element={<Register setUser={setUser} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Protected Routes (require login) */}
              <Route path="/checkout" element={
                user ? <Checkout user={user} /> : <Navigate to="/login" />
              } />
              <Route path="/profile" element={
                user ? <Profile user={user} setUser={setUser} /> : <Navigate to="/login" />
              } />
              <Route path="/orders" element={
                user ? <OrderHistory user={user} /> : <Navigate to="/login" />
              } />
              <Route path="/order-success" element={
                user ? <OrderSuccess /> : <Navigate to="/login" />
              } />
              
              {/* Admin Routes (require admin role) */}
              <Route path="/admin" element={
                user?.role === 'admin' ? <Admin /> : <Navigate to="/" />
              } />
              <Route path="/admin/products" element={
                user?.role === 'admin' ? <Admin /> : <Navigate to="/" />
              } />
              <Route path="/admin/orders" element={
                user?.role === 'admin' ? <Admin /> : <Navigate to="/" />
              } />
              <Route path="/admin/users" element={
                user?.role === 'admin' ? <Admin /> : <Navigate to="/" />
              } />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

// 404 Not Found Component
const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/" style={{ color: '#007bff', textDecoration: 'none' }}>Go Home</a>
  </div>
);

export default App;