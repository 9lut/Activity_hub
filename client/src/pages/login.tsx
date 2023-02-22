import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import './login.css';

const Login: React.FC = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!email || !password) {
      console.log('Please provide both email and password.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          identifier: email,
          password: password
        })
      });
  
      if (response.ok) {
        const data = await response.json();
        // save the token to local storage or global state
        navigate('/dashboard');
      } else {
        console.log('Login failed.');
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="container">
    <div className="image">
    <form className="form">
      <p id="heading">
        Login</p>
      <div className="field">
      <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" 
      width="16" height="16" 
      fill="currentColor" 
      viewBox="0 0 16 16">
      </svg>
        <input placeholder="Username" className="input-field"
        onChange={(e) => setEmail(e.target.value)}
        type="text"/>
      </div>
      <div className="field">
      <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      </svg>
        <input placeholder="Password" className="input-field" 
        onChange={(e) => setPassword(e.target.value)}
        type="password"/>
      </div>
      <div className="btn">
      <button className="button1" onClick={() => navigate("/Home")}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
      </div>
    </form>
  </div>
  </div>
  );
};

export default Login;