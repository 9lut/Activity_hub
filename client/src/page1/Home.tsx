import { ChangeEvent, useEffect, useState } from 'react';
import { Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AppBar from '../components/appbar';
import Result from '../models/Result';

function Home() {
  const [Home, setHome] = useState<Result[]>([])
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar></AppBar>
      <Select
        sx={{ m: 2, minWidth: 120 }}
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
      <TextField sx={{ m: 2, minWidth: 120 }} label="ชื่อกิจกรรม" placeholder="ค้นหาชื่อกิจกรรม" variant="outlined" value={searchFilter} onChange={handleChangeSearchFilter} />
      {Home.length
        ?
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 10 }}>
        </Grid>
        :
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
          <Typography variant="body2" color="text.secondary">No Result Found</Typography>
        </Box>
      }

    </Box>
  );
};

export default Home;