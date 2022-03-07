
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from "react-router-dom";

export default function MobileCard({img, deviceName, price,ram, rom, deviceId}) {
  return (
    <Link to={deviceId} className='card'>
    <Card className='' sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        alt={deviceName}
        height="240"
        image={img}
      />
      <CardContent className='device-name'>
        <Typography gutterBottom variant="p" component="div" className='mname'>
          {deviceName} 
        </Typography>
      </CardContent>
      <CardActions className='card-footer'>
        <strong size="small">{price}</strong>
        <strong size="small">{ram}/{rom}</strong>
      </CardActions>
    </Card>
    </Link>
  );
}
