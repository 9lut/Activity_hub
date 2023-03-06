import { Routes , Route } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './page1/login';
import Home from './page1/Home';
import Register from './page1/register';
import Profile from './page1/Profile'
import Homepage from './page1/Homepage';
import AllAct from "./page2/allAct";
import From from "./page1/from";
import Payment from "./page1/payment";



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
        <Route path="AllAct" element={<AllAct />}/>
        <Route path="from" element={<From />}/>
        <Route path="payment" element={<Payment />}/>
      </Routes>
    </div>
  );
}

export default App;
