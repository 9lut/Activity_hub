import { Routes , Route } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Profile from './pages/profile';
import Sigin from './pages/sigin';

function App() {
  return (
    <div>
        <Route path="/" element={< Login />} />
        <Route path="login" element={< Login />} />
    </div>
  );
}

export default App;
