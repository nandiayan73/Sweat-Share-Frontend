import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <img
        src="your-profile-picture-url.jpg" 
        alt="Profile"
        className="profile-pic"
      />
      <div className="profile-info">
        <h1>nandiaayn_73</h1>
        <p>Ayan Nandi</p>
        <p>U Know Who I am</p>
        <div className="stats">
          <span>51 posts</span>
          <span>164 followers</span>
          <span>953 following</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
