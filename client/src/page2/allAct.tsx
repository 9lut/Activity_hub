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
        <body>
          <Button variant="contained">Contained</Button>
          <div>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box display='flex'>
                    <Box sx={{width:'40%'}}>
                      <img src='https://www.google.co.th/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fphoto%2520editing%2F&psig=AOvVaw3T_-PyecCtmZ4K7WWrjqeG&ust=1678121426018000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjqic2fxf0CFQAAAAAdAAAAABAD'/>
                    </Box>
                    <Box sx={{ width: '60%', paddingLeft: '16px' }}>
                      <Typography variant="h5" gutterBottom>
                        ABCDEFGHIJKLMNOP
                      </Typography>
                      <Typography variant="body1">el;fakljfoakfomafkowpkf[pa,fopa</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </div>
        </body>
      </Box>
      
    );
  };
  
  export default AllAct;