import { useState } from 'react'
import './App.css'
import Home from './frontpage/Home'
import Register from './Auth/register';
import {Routes, Route,Link} from "react-router-dom";
import Login from './Auth/login';
import Profile from './User Pages/profile';
import MatchOtp from './Auth/matchOtp';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home  key="1"></Home>}></Route>
        <Route path="/register" element={<Register  key="1"></Register>}></Route>
        <Route path="/register/match-otp" element={<MatchOtp key="2"></MatchOtp>}></Route>
        <Route path="/login" element={<Login  key="1"></Login>}></Route>
        <Route path="/user/profile" element={<Profile  key="1"></Profile>}></Route>
      </Routes>
    </>
  )
}

export default App
