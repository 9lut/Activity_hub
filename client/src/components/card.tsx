import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { CardActionArea } from '@mui/material';
import Activity from '../models/Activity';

interface Props {
  activity: Activity;
}

const CardHome = ({ activity }: Props) => {
  const navigate = useNavigate();
  const item = activity.attributes;
  const ActivityImage = `http://localhost:1337${item.cover.data.attributes.formats.thumbnail.url}`;

  // console.error(activity.attributes.activity_date.data.attributes.event)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => navigate(`/activity/${activity.id}`)}>
        <CardMedia
          component="img"
          width="400"
          height="200"
          src={ActivityImage}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {activity.attributes.activity_date.data.attributes.event} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.location}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardHome;
