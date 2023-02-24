import { Routes , Route } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Home from './pages/Home';
import Register from './pages/register';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Login />} />
        <Route path="login" element={< Login />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
