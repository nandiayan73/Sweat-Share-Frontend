import React from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import Posts from './components/Posts';
import './up.css';

const Profile=()=> {
  return (
    <div className="app-container ">
      <Header />
      <Stories />
      <Posts />
    </div>
  );
}

export default Profile;
