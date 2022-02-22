import React from 'react';
import Alert from '@mui/material/Alert';
import style from '../static/css/Title.module.css';

export default function Title({title}) {
  return (
    <div className={style.title}>
        <Alert severity="info">{title}</Alert>
    </div>
    
  )
}
