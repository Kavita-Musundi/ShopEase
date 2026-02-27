import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      
      <div style={styles.grid}>
        <div style={styles.infoSection}>
          <h2 style={styles.sectionTitle}>Get in Touch</h2>
          
          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>📍</div>
            <div>
              <h4>Address</h4>
              <p>Kottigeri Bankapur, Haveri, Karnataka 581202</p>
            </div>
          </div>
          
          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>📞</div>
            <div>
              <h4>Phone</h4>
              <p>+91 8123815488</p>
            </div>
          </div>
          
          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>✉️</div>
            <div>
              <h4>Email</h4>
              <p>kavita@gmail.com</p>
            </div>
          </div>
          
          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>🕒</div>
            <div>
              <h4>Business Hours</h4>
              <p>Monday - Saturday: 9am - 6pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div style={styles.formSection}>
          <h2 style={styles.sectionTitle}>Send us a Message</h2>
          
          {submitted && (
            <div style={styles.success}>
              Thank you for contacting us! We'll respond within 24 hours.
            </div>
          )}
          
          <form onSubmit={handleSubmit} style={styles.form}>
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
            
            <div style={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            
            <div style={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
              />
            </div>
            
            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '40px auto',
    padding: '20px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '40px',
    color: '#333'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px'
  },
  infoSection: {
    background: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  formSection: {
    background: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  sectionTitle: {
    marginBottom: '30px',
    color: '#333'
  },
  infoItem: {
    display: 'flex',
    gap: '15px',
    marginBottom: '25px'
  },
  infoIcon: {
    fontSize: '24px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  input: {
    padding: '10px',
    border: '2px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px'
  },
  textarea: {
    padding: '10px',
    border: '2px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
    minHeight: '120px'
  },
  button: {
    padding: '12px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  success: {
    padding: '10px',
    background: '#d4edda',
    color: '#155724',
    borderRadius: '5px',
    marginBottom: '20px'
  }
};

export default Contact;