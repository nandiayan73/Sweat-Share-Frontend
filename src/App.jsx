import { useState } from 'react'
import './App.css'
import Home from './frontpage/Home'
import Register from './Auth/register';
import {Routes, Route,Link} from "react-router-dom";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home  key="1"></Home>}></Route>
        <Route path="/register" element={<Register  key="1"></Register>}></Route>
      </Routes>
    </>
  )
}

export default App
