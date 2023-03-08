import { ChangeEvent, useEffect, useState } from 'react';
import { Divider, Grid, List, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { Box, maxWidth } from '@mui/system';
import AdminAppBar from '../components/appbar';
import CardHome from '../components/card';
import '../page1/Home.css';
import ActivityHub from '../repositories/index';
import Activity from '../models/Activity';
import AdminBlock from '../components/adminblock';

const style = {
  width: '100%',
  maxWidth: 700
};

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
      <AdminAppBar />
        <Box className="allAct-container">
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
             
            <List sx={style} component="nav" aria-label="mailbox folders">
              {home.map((item) => (
                <Grid item key={item.id}>
                  <AdminBlock activity={item} />
                </Grid>
              ))}
            </List>
            
            </Box> 
    </div>
  );
};
export default Home;