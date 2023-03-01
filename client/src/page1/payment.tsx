import { ChangeEvent, useEffect, useState } from 'react';
import { Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Result from '../models/Result';
import AppBar from '../components/appbar';
import './payment.css';

function Payment() {
  const [home, setHome] = useState<Result[]>([]);
  const [selectFilter, setSelectFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const fetchPayment = async () => {
    let params: { keyword?: string, isPinned?: boolean } = {}
    if (searchFilter) {
      params.keyword = searchFilter
    }
  };

  const handleChangeSearchFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  const handleChangeSelectFilter = (event: SelectChangeEvent) => {
    setSelectFilter(event.target.value);
  };
  

  return (
    <>
    <AppBar />
      <header className="header">
        <div className="container">
        </div>
      </header>

      <section className="contact">
        <div className="container">
          <div className="contact_area">
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