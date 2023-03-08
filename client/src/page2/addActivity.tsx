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
        <Box className="allAct-container">
          <AdminAppBar />
         
            
                
        </Box>
        
      );
  
  }

export default AddActivity;