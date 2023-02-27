import { Routes , Route } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './page1/login';
import Home from './page1/Home';
import Register from './page1/register';
import AppBar from "./components/appbar";
<<<<<<< HEAD
import Profile from './page1/Profile'
=======
import Homepage from './page1/Homepage';
>>>>>>> 37aaa05 (เพิ่มหน้ารองก่อนเข้าหน้าหลัก)

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Login />} />
        <Route path="login" element={< Login />} />
        <Route path="Home" element={< Home />} />
        <Route path="register" element={<Register/>} />
<<<<<<< HEAD
        <Route path="/Profile" element={<Profile />} />
=======
        <Route path="homepage" element={<Homepage />}/>
>>>>>>> 37aaa05 (เพิ่มหน้ารองก่อนเข้าหน้าหลัก)
      </Routes>
    </div>
  );
}

export default App;
