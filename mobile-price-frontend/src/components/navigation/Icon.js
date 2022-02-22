import CameraOutdoorRoundedIcon from '@mui/icons-material/CameraOutdoorRounded';
import DesktopMacRoundedIcon from '@mui/icons-material/DesktopMacRounded';
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import TabletMacRoundedIcon from '@mui/icons-material/TabletMacRounded';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import React from 'react';
import style from '../../static/css/NavStyle.module.css';

export default function Icon() {
  return (
    <div>
      <Box sx={{ '& > :not(style)': { m: 0.3 } }}>
      <a href="#">
        <Fab color="primary" className={style.gradiant} aria-label="" size="small" >
          <PhoneIphoneRoundedIcon />
        </Fab>
      </a>

      <a href="#">
        <Fab color="primary" aria-label="" size="small" className={style.gradiant}>
        <TabletMacRoundedIcon />
        </Fab>
      </a>
      <a href="#">
        <Fab color="primary" aria-label="" size="small" className={style.gradiant}>
        <LaptopChromebookRoundedIcon />
        </Fab>
      </a>
      <a href="#">
        <Fab color="primary" aria-label="" size="small" className={style.gradiant}>
        <DesktopMacRoundedIcon />
        </Fab>
      </a>
      <a href="#">
        <Fab color="primary" aria-label="" size="small" className={style.gradiant}>
        <CameraOutdoorRoundedIcon />
        </Fab>
      </a>
      <a href="#">
        <Fab color="primary" aria-label="" size="small" className={style.gradiant}>
        <HeadphonesRoundedIcon />
        </Fab>
      </a>
      </Box>
      
    
       
       
    </div>
  )
}
