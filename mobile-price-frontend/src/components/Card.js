import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import phone from '../static/images/oppo.jpg';

export default function MediaCard() {
  return (
    <Card sx={{ Width: 100 }}>
      <CardMedia
        component="img"
        height="200"
       
        image={phone}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          OPPO A74 5G
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">$22,000</Button>
        <Button size="small">8/128</Button>
      </CardActions>
    </Card>
  );
}