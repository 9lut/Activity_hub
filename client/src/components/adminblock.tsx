import { Box, CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Activity from '../models/Activity';

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
    <Box onClick={() => navigate(`/activity/${activity.id}`)}>
    <CardMedia className="CardMedia"
          component="img"
          
          height="100%"
          src={ActivityImage}
          alt=""
        />
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
    <br/>
    </div>
  )
}
  


export default AdminBlock;