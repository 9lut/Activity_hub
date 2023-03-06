import { ChangeEvent, useEffect, useState } from 'react';
import { Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Result from '../models/Result';
import AppBar from '../components/appbar';
import './from.css';

function Payment() {
  const [home, setHome] = useState<Result[]>([]);


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
            <form>
              <label>ชื่อ</label><br />
              <input type="text" placeholder="" /><br />
              <label>สกุล</label><br />
              <input type="text" placeholder="" /><br />
              <label>อีเมล</label><br />
              <input type="email" placeholder="" /><br />
              <label>เบอร์โทร</label><br />
              <input type="text" placeholder="" /><br />
              <button>ยืนยัน</button><br />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;