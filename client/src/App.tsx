import { Routes , Route } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './page1/login';
import Home from './page1/Home';
import Register from './page1/register';
import Homepage from './page1/Homepage';
import AllAct from "./page2/allAct";
import From from "./page1/from";
import Payment from "./page1/payment";
import DetailAct from "./page1/DetailActPage";
import Logout from "./page1/logout";
import ActivityHistory from "./page1/activityhistory";
import AddActivity from "./page2/addActivity";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="login" element={< Login />} />
        <Route path="Home" element={< Home />} />
        <Route path="register" element={<Register/>} />
        <Route path="homepage" element={<Homepage />}/>
        <Route path="AllAct" element={<AllAct />}/>
        <Route path="from" element={<From />}/>
        <Route path="payment" element={<Payment />}/>
        <Route path="/activity/:id" element={<DetailAct />} />
        <Route path="logout" element={<Logout />} />
        <Route path="activityhistory" element={<ActivityHistory />} />
        <Route path="addActivity" element={<AddActivity />} />
      </Routes>
    </div>
  );
}

export default App;