import { Routes , Route } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './page1/login';
import Home from './page1/Home';
import Register from './page1/register';
import AppBar from "./components/appbar";
import Profile from './page1/Profile'
import Homepage from './page1/Homepage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Login />} />
        <Route path="login" element={< Login />} />
        <Route path="Home" element={< Home />} />
        <Route path="register" element={<Register/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="homepage" element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default App;
