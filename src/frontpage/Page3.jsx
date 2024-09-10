// GymSection.js
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import './Page3.css'; // Import the CSS module

const Page3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="pcontainer">
      <div className="photo" data-aos="fade-right" data-aos-duration="1000">
        <img src="images/Home/gymbro2.png" alt="Gym Photo" />
        <br></br>
      </div>
      <div className="info" data-aos="fade-left" data-aos-duration="1000">
        <h1 style={{color:"white"}}>Welcome to your own social media</h1>
       
        <a href="/register" className="join-button">Join Us</a>
      </div>
    </div>
  );
};

export default Page3;
