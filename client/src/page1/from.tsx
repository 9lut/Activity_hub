import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Result from '../models/Result';
import AppBar from '../components/appbar';
import './from.css';
import axios from 'axios';
import conf from '../conf';


function Form() {
  const [home, setHome] = useState<Result[]>([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${conf.apiPrefix}api/activityregisters`, {
        firstName,
        lastName,
        email,
        phoneNumber
      });
      console.log(res.data); // log the response data
      // clear the form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
      <AppBar />
      <header className="header">
        <div className="container">
        </div>
      </header>

      <section className="from">
        <div className="container">
          <div className="from_area">
            <h1>การสมัคร</h1>
            <h3>ข้อมูลผู้สมัคร</h3>
            <form onSubmit={handleSubmit}>
              <label>ชื่อ</label><br />
              <input type="text" placeholder="" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />
              <label>สกุล</label><br />
              <input type="text" placeholder="" value={lastName} onChange={(e) => setLastName(e.target.value)} /><br />
              <label>อีเมล</label><br />
              <input type="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
              <label>เบอร์โทร</label><br />
              <input type="text" placeholder="" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /><br />
              <button type="submit">ยืนยัน</button><br />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;