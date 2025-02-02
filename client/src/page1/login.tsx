import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import './login.css';
import { storeUser } from "../helper";
import conf from "../conf";

const Login: React.FC = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const img = require('../image/Activity.png')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`${conf.apiPrefix}/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      storeUser(data)
      localStorage.setItem("token", data.jwt);
      Swal.fire({
        icon: "success",
        title: "คุณล็อคอินสำเร็จ",
        text: "ยินดีต้อนรับเข้าสู่ ACTIVITY_HUB",
      }).then(() => {
        navigate("/Homepage");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "คุณป้อนอีเมลหรือรหัสผ่านไม่ถูกต้อง",
        text: "Please enter again!",
      });
    }
  };
  
  return (
    <div className="backgroundimage">
          <img src={img} className="logo" />

        <form className="form" onSubmit={handleSubmit}>
          <p className="heading">เข้าสู่ระบบ</p>
          <p className="Username">บัญชีผู้ใช้</p>
          <div className="field">
            <svg
              className="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
            </svg>
            <input
              placeholder="Username"
              className="input-field"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <p className="Password">รหัสผ่าน</p>
          <div className="field">
            <svg
              className="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
            </svg>
            <input
              placeholder="Password"
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <span>คุณยังไม่มีบัญชีใช่ไหม?<a href="http://localhost:3000/register" className="link signup-link">สมัครที่นี่</a></span>
          <div className="btn">
            <button className="button1" type="submit">ลงชื่อเข้าใช้</button>
          </div>
          <div className="media-options">
            <a href="http://localhost:1337/api/connect/google" className="field google">
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" className="google-img" />
                <span>เข้าสู่ระบบโดย Google</span>
              </a>
          </div>
        </form>
      </div>
  );
};

export default Login;