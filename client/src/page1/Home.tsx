import { ChangeEvent, useEffect, useState } from 'react';
import { Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AppBar from '../components/appbar';
import CardHome from '../components/card';
import './Home.css';
import ActivityHub from '../repositories/index';
import Activity from '../models/Activity';

function Home() {
  const [home, setHome] = useState<Activity[]>([])
  const [selectFilter, setSelectFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const fetchHome = async () => {
    let params: { keyword?: string, isPinned?: boolean } = {}
    if (searchFilter) {
      params.keyword = searchFilter
    }
  }

  const fetchhomeData = async () => {
    const activity = await ActivityHub.Actity.getAll()
    if(activity) {
      console.log(activity)
      setHome(activity)
    }
  }
  
  const handleChangeSearchFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  const handleChangeSelectFilter = (event: SelectChangeEvent) => {
    setSelectFilter(event.target.value);
  };
  
  useEffect(() => {
    fetchhomeData()
  }, [searchFilter])

  return (
  <div>
    <AppBar />
      <header className="header">
        <div className="container">
        </div>
      </header>
        <Box className="search-box">
          <TextField
            className="search-input"
            label="ชื่อกิจกรรม"
            placeholder="ค้นหาชื่อกิจกรรม"
            variant="outlined"
            value={searchFilter}
            onChange={handleChangeSearchFilter}/>
        
          <Select
            className="search-select"
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
          <Typography gutterBottom variant="h5" component="div" marginTop={8}>
          Open now   
          </Typography>
          <Box className='AcBox'>
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 10 }}>
            {home.map((item) => (
              <Grid item key={item.id} xs={2} sm={4} md={4} lg={3} xl={3}>
                <CardHome activity={item} />
              </Grid>
            ))}
          </Grid>
          </Box>
        </Box>
  </div>
  );
};
export default Home;