import { ChangeEvent, useEffect, useState } from 'react';
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { Box } from '@mui/system';
import AppBar from '../components/appbar';
import Result from '../models/Result';
import backgroundImage from '../image/backgroundhome.png';
import './Home.css';
import { Container } from 'react-bootstrap';

function Home() {
  const [home, setHome] = useState<Result[]>([])
  const [selectFilter, setSelectFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const fetchHome = async () => {
    let params: { keyword?: string, isPinned?: boolean } = {}
    if (searchFilter) {
      params.keyword = searchFilter
    }
  }

  const handleChangeSearchFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  const handleChangeSelectFilter = (event: SelectChangeEvent) => {
    setSelectFilter(event.target.value);
  };
  
  useEffect(() => {
    fetchHome()
  }, [searchFilter])

  return (
    <Box className="home-container">
      <AppBar />
      <Box className="search-box">
        <Select
          className="filter-select"
          value={selectFilter}
          onChange={handleChangeSelectFilter}
          displayEmpty
        >
        
          <MenuItem disabled value="">
            ประเภทกิจกรรม
          </MenuItem>
            <MenuItem value={1}>
              <p className="search-all">ทั้งหมด</p>
            </MenuItem>
            <MenuItem value={2}>
              <p className="search-run">กิจกรรมวิ่ง</p>
            </MenuItem>
            <MenuItem value={3}>
              <p className="search-camp">กิจกรรมค่าย</p>
            </MenuItem> 
        </Select>

        <TextField
          className="search-input"
          label="ชื่อกิจกรรม"
          placeholder="ค้นหาชื่อกิจกรรม"
          variant="outlined"
          value={searchFilter}
          onChange={handleChangeSearchFilter}/>
      </Box>
    </Box>
  );
};

export default Home;