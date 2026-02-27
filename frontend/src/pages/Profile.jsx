import React, { useState } from 'react';
import axios from 'axios';

const Profile = ({ user, setUser }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('http://localhost:5000/api/auth/profile', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
      setMessage('Profile updated successfully!');
      setError('');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setError('Error updating profile');
      setMessage('');
    }
  };

  if (!user) {
    return <div style={styles.loading}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Profile</h1>
      
      {message && <div style={styles.success}>{message}</div>}
      {error && <div style={styles.error}>{error}</div>}
      
      <div style={styles.card}>
        <div style={styles.infoSection}>
          <h3>Account Information</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Member since:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <h3>Edit Profile</h3>
          
          <div style={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          
          <div style={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          
          <button type="submit" style={styles.button}>
            Update Profile
          </button>
        </form>
      </div>
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
  card: {
    background: 'white',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  infoSection: {
    marginBottom: '30px',
    padding: '20px',
    background: '#f8f9fa',
    borderRadius: '8px'
  },
  form: {
    borderTop: '2px solid #eee',
    paddingTop: '30px'
  },
  formGroup: {
    marginBottom: '20px'
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '2px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
    marginTop: '5px'
  },
  button: {
    padding: '12px 30px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%'
  },
  success: {
    padding: '10px',
    background: '#d4edda',
    color: '#155724',
    borderRadius: '5px',
    marginBottom: '20px'
  },
  error: {
    padding: '10px',
    background: '#f8d7da',
    color: '#721c24',
    borderRadius: '5px',
    marginBottom: '20px'
  },
  loading: {
    textAlign: 'center',
    padding: '50px',
    fontSize: '1.2rem',
    color: '#666'
  }
};

export default Profile;