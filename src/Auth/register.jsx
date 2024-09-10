// RegisterPage.js
import React, { useState } from 'react';
import './auth.css';
import HomeFooter from '../frontpage/HomeFooter';
import HomeHeader from '../frontpage/HomeHeader';
import { useMediaQuery } from '@chakra-ui/react'

const Register = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
    <HomeHeader></HomeHeader>
    <div className="register-container">
      <div className="image-background" style={{display:isMobile?"none":""}}/>
      <div className="form-background">
        <div className="register-card">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">Register</button>
          </form>
        </div>
      </div>
    </div>
    <HomeFooter></HomeFooter>
    </>
  );
};

export default Register;
