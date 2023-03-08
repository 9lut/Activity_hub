import { Box, CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Activity from '../models/Activity';
import './adminblock.css'

interface Props {
  activity: Activity;
}

const AdminBlock = ({activity}: Props) => {
  const navigate = useNavigate();
  const item = activity.attributes;
  const ActivityImage = `http://localhost:1337${item.cover.data.attributes.formats.thumbnail.url}`;


  return (
    <div>
      <hr/>
      <br/>
      <br/>
      <Box style={{display:'flex', alignItems: 'center'}}>
        <CardMedia className="CardMedia"
              component="img"
              src={ActivityImage}
              style={{
                width:'70%',
                height: 'auto',
                maxWidth: 'none'
              }}
            />
          <Box className="description">
            <br/>
          <Typography gutterBottom variant="h5" component="div">
              {item.name}
          </Typography>
          /*<Typography variant="body2" color="text.secondary">
              {item.event}*/
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.location}
          </Typography>
          </Box>
      </Box>
      <br/>
      <br/>
    </div>
  )
}
  


export default AdminBlock;