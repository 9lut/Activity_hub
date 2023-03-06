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
import AllAct from "./page2/allAct";
import Payment from "./page1/payment";
import DetailAct from "./page1/DetailActPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="login" element={< Login />} />
        <Route path="Home" element={< Home />} />
        <Route path="register" element={<Register/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="AllAct" element={<AllAct />}/>
        <Route path="payment" element={<Payment />}/>
        <Route path="detailact" element={<DetailAct />} />
      </Routes>
    </div>
  );
}

export default App;
