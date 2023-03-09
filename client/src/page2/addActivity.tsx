import { ChangeEvent, useEffect, useState } from 'react';
import { Button, Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import AdminAppBar from '../components/adminbar';
import Result from '../models/Result';
import './addActivity.css'
import {Form} from 'react-bootstrap'

const AddActivity = () => {
  const [user, setUser] = useState({
    activity_name: "",
    activity_date: "",
    activity_firstenddate: "",
    activity_price: "",
    activity_type: "",
    activity_amount: "",
    activity_subamount: "",
    activity_other: ""
  });

  const [selectActivityType, setSelectActivityType] = useState('')

  const { activity_name, activity_date, activity_firstenddate, activity_price, activity_amount, activity_subamount, activity_other} = user;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>| SelectChangeEvent) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleActicityTypeChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setSelectActivityType(e.target.value)
  }

// function AddActivity() {
//     const [home, setHome] = useState<Result[]>([])
//     const [selectFilter, setSelectFilter] = useState('');
//     const [searchFilter, setSearchFilter] = useState('');
  
//     const fetchHome = async () => {
//       let params: { keyword?: string, isPinned?: boolean } = {}
//       if (searchFilter) {
//         params.keyword = searchFilter
//       }
//     }
   
//     useEffect(() => {
//       fetchHome()
//     }, [searchFilter])
    
    return (
      <Box>
      <AdminAppBar />
      <br />
      <Container className="Detail">
        <h2>ข้อมูลกิจกรรม</h2>
        <br />
        <form>
          <div style={{ marginBottom: '20px' }}>
            <p>ชื่องาน</p>
            <input type="text"
            name="activity_name"
            value={activity_name}
            onChange={e => onInputChange(e)} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>วันที่จัดงาน</p>
            <input 
            name="activity_date"
            value={activity_date}
            onChange={e => onInputChange(e)}/>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>วันที่เปิด-ปิดรับสมัคร</p>
            <input 
            name="activity_firstenddate"
            value={activity_firstenddate}
            onChange={e => onInputChange(e)}/>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>ราคาค่าสมัคร</p>
            <input 
            name="activity_price"
            value={activity_price}
            onChange={e => onInputChange(e)}/>
          </div>

          <Box style={{ marginBottom: '20px' }}>
            <p>ประเภทกิจกรรม</p> 
            {/* <Select
            className="SelectType"
            name="activity_type"
            value={activity_type}
            onChange={e => onInputChange(e)}>
              <MenuItem disabled value="">
                ประเภทกิจกรรม
              </MenuItem>
              <MenuItem>กิจกรรมค่าย</MenuItem>
              <MenuItem>กิจกรรมวิ่ง</MenuItem>
            </Select> */}
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
            <input 
            name="activity_amount"
            value={activity_amount}
            onChange={e => onInputChange(e)}/>
          </div>

          <Box className="SubAmount" style={{ marginBottom: '20px' }}>
            <p>สำรอง</p>
            <input 
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
          <Button variant='contained'>GG</Button>
        </form>
      </Container>
    </Box>
        
      );
  
  }

export default AddActivity;