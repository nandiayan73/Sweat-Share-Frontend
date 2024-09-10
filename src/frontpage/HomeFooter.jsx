// Footer.jsx
import React from 'react';

const HomeFooter = () => {
  return (
    <footer className="footer" >
      <div className="footer-content">
        <div className="footer-section">
          <h2 style={{color:"white"}}>About Us</h2>
          <p>
            Welcome to Gym Social Media – your ultimate fitness companion in the digital world. Our platform is dedicated to revolutionizing how you connect with your fitness goals and community.
          </p>
        </div>
        <div className="footer-section">
          <h2 style={{color:"white"}}>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 style={{color:"white"}}>Contact Us</h2>
          <p>Email: nandiayan73@gmail.com</p>
          <p>Phone: +91 8910363144</p>
        </div>
        {/* <div className="footer-section">
          <h2 style={{color:"white"}}>Follow Us</h2>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sweat Share. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default HomeFooter;
