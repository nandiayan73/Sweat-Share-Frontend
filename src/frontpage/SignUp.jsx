import React, { useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [signDisplay, setSignDisplay] = useState("none");
  const navigate=useNavigate();

  const handleFocus = () => {
    setSignDisplay("");
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setSignDisplay("none");
    }
  };
  const openRegister=(e)=>{
    e.preventDefault();
    if (email) {
      // Navigate to /register or other routes when the button is clicked
      navigate('/register');
    } 
  }

  return (
    <div className="signup-container animate-subheading">
      <div className="email-input-container">
        <input
          type="email"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <label className={email ? "email-label active" : "email-label"}>
          Email address
        </label>
      </div>
      <button className="get-started-button" style={{ display: signDisplay }} >
        <span onClick={(e)=>openRegister(e)}>Join &#x27A4;</span>
      </button>
    </div>
  );
};

export default SignupForm;
