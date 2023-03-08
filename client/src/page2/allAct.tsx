import { ChangeEvent, useEffect, useState } from 'react';
import { Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import AdminAppBar from '../components/adminbar';
import Result from '../models/Result';
import './allAct.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CardHome from '../components/card';
import { Block } from '@mui/icons-material';
import AdminBlock  from '../components/adminblock';

function AllAct() {
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
      <Box className="allAct-container">
        <AdminAppBar />
        <Select
          className="filter-select"
          value={selectFilter}
          onChange={handleChangeSelectFilter}
          displayEmpty
        >
        
          <MenuItem disabled value="">
            ประเภทกิจกรรม
          </MenuItem>
          <MenuItem value={1}>ทั้งหมด</MenuItem>
          <MenuItem value={2}>กิจกรรมค่าย</MenuItem>
          <MenuItem value={3}>กิจกรรมวิ่ง</MenuItem>
          
        </Select>
          <Button className ="Addbutton" variant="contained">Add Activity</Button>
              <AdminBlock/>
      </Box>
      
    );
  }
  
  export default AllAct;