import { ChangeEvent, useEffect, useState } from 'react';
import { Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AppBar from '../components/appbar';
import Result from '../models/Result';
import backgroundImage from '../image/backgroundhome.jpg';
import './Home.css';

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
      <Select
        className="filter-select"
        value={selectFilter}
        onChange={handleChangeSelectFilter}
        displayEmpty
      >
      
        <MenuItem value=''>
          ค้นหาประเภทกิจกรรม
        </MenuItem>
        <MenuItem value={1}>ทั้งหมด</MenuItem>
        <MenuItem value={2}>กิจกรรมค่าย</MenuItem>
        <MenuItem value={3}>กิจกรรมวิ่ง</MenuItem>
      </Select>
      <TextField className="search-input" label="ชื่อกิจกรรม" placeholder="ค้นหาชื่อกิจกรรม" variant="outlined" value={searchFilter} onChange={handleChangeSearchFilter}/>
    </Box>
  );
};

export default Home;