import { ChangeEvent, useEffect, useState } from 'react';
import { Button, Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import AdminAppBar from '../components/adminbar';
import Result from '../models/Result';
import './addActivity.css'
import {Form} from 'react-bootstrap'
import axios from 'axios';

const AddActivity = () => {
  const [user, setUser] = useState({
    activity_name: "",
    activity_date: "",
    activity_firstdate: "",
    activity_enddate: "",
    activity_price: "",
    activity_type: "",
    activity_amount: "",
    activity_subamount: "",
    activity_other: "",
    activity_image: ""
  });

  const [selectActivityType, setSelectActivityType] = useState('')

  const { activity_name, activity_date, activity_firstdate, activity_enddate, activity_price, activity_amount, activity_subamount, activity_other, activity_image} = user;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>| SelectChangeEvent) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleActicityTypeChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setSelectActivityType(e.target.value)
  }

  const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await axios.post("http://localhost:1337/api/activities", user);
    alert("Activity has been added");
  }

    return (
      <Box>
      <AdminAppBar />
      <br />
      <Container className="Detail">
        <h2>ข้อมูลกิจกรรม</h2>
        <br />
        <form onSubmit={e => onSubmit(e)}>
          <div style={{ marginBottom: '20px' }}>
            <p>ชื่องาน</p>
            <input type="text"
            name="activity_name"
            value={activity_name}
            onChange={e => onInputChange(e)} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>วันที่จัดงาน</p>
            <input type="date"
            name="activity_date"
            value={activity_date}
            onChange={e => onInputChange(e)}/>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>วันที่เปิดรับสมัคร</p>
            <input type="date"
            name="activity_firstdate"
            value={activity_firstdate}
            onChange={e => onInputChange(e)}/>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>วันที่ปิดรับสมัคร</p>
            <input type="date"
            name="activity_enddate"
            value={activity_enddate}
            onChange={e => onInputChange(e)}/>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>ราคาค่าสมัคร</p>
            <input type="number"
            name="activity_price"
            value={activity_price}
            onChange={e => onInputChange(e)}/>
          </div>

          <Box style={{ marginBottom: '20px' }}>
            <p>ประเภทกิจกรรม</p> 

            <Form.Select
              value={selectActivityType}
              onChange={handleActicityTypeChange}
              required
            >
              <option value="" disabled hidden>เลือกประเภทกิจกรรม</option>
              <option value="กิจกรรมค่าย">กิจกรรมค่าย</option>
              <option value="กิจกรรมวิ่ง">กิจกรรมวิ่ง</option>
            </Form.Select>
          </Box>

          <div style={{ marginBottom: '20px' }}>
            <p>จำนวนผู้รับ</p>
            <input type="number"
            name="activity_amount"
            value={activity_amount}
            onChange={e => onInputChange(e)}/>
          </div>

          <Box className="SubAmount" style={{ marginBottom: '20px' }}>
            <p>สำรอง</p>
            <input type="number"
            name="activity_subamount"
            value={activity_subamount}
            onChange={e => onInputChange(e)}/>
          </Box>

          <div style={{ marginBottom: '20px' }}>
            <p>รายละเอียดอื่นๆ</p>
            <input type="text" 
            name="activity_other"
            value={activity_other}
            onChange={e => onInputChange(e)}/>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>รูปภาพ</p>
            <input type="file" 
            name="activity_image"
            value={activity_image}
            onChange={e => onInputChange(e)}/>
          </div>

          <Button variant='contained'>Add</Button>
        </form>
      </Container>
    </Box>
      );
  }

export default AddActivity;