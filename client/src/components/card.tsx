import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardHome() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="400"
          height="200"
          image="https://www.google.co.th/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fphoto%2520editing%2F&psig=AOvVaw3T_-PyecCtmZ4K7WWrjqeG&ust=1678121426018000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjqic2fxf0CFQAAAAAdAAAAABAD"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CN ANGEL RUN MINIMARATHON 2023    
          </Typography>
          <Typography variant="body2" color="text.secondary">
          14 พฤษภาคม 2566
          </Typography>
          <Typography variant="body2" color="text.secondary">
          โรงเรียนชลกันยานุกูล – สะพานชลมารถวิถี 84 พรรษา
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}