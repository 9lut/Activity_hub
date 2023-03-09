import { ChangeEvent, useEffect, useState } from 'react';
import { Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import AdminAppBar from '../components/adminbar';
import Result from '../models/Result';
import './addActivity.css'


function AddActivity() {
    const [home, setHome] = useState<Result[]>([])
    const [selectFilter, setSelectFilter] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
  
    const fetchHome = async () => {
      let params: { keyword?: string, isPinned?: boolean } = {}
      if (searchFilter) {
        params.keyword = searchFilter
      }
    }
   
    useEffect(() => {
      fetchHome()
    }, [searchFilter])
    
    return (
      <Box>
      <AdminAppBar />
      <br />
      <Container className="Detail">
        <h2>ข้อมูลกิจกรรม</h2>
        <br />
        <form>
          <div style={{ marginBottom: '20px' }}>
            <p>ชื่อผู้ติดต่อ</p>
            <input type="text" />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>อีเมล</p>
            <input type="text" />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>เบอร์โทร</p>
            <input type="text" />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>ชื่องาน</p>
            <input type="text" />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>วันที่จัดงาน</p>
            <input />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>วันที่เปิดรับสมัคร</p>
            <input />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>ราคาค่าสมัคร</p>
            <input />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>ประเภทกิจกรรม</p>
            <input />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p>จำนวนผู้รับ</p>
            <input />
          </div>

          <Box className="SubAmount" style={{ marginBottom: '20px' }}>
            <p>สำรอง</p>
            <input />
          </Box>

          <div style={{ marginBottom: '20px' }}>
            <p>รายละเอียดอื่นๆ</p>
            <input type="text" />
          </div>

        </form>
      </Container>
    </Box>
        
      );
  
  }

export default AddActivity;