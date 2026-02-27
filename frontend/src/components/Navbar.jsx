import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import './Navbar.css';

const Navbar = ({ user, setUser }) => {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          🛍️ ShopEase
        </Link>
        
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          
          {user ? (
            <>
              {user.role === 'admin' && (
                <Link to="/admin" className="nav-link">Admin</Link>
              )}
              <Link to="/cart" className="nav-link cart-link">
                Cart 🛒
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </Link>
              <Link to="/profile" className="nav-link">{user.name}</Link>
              <button onClick={handleLogout} className="btn btn-danger">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary">Login</Link>
              <Link to="/register" className="btn btn-outline">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;