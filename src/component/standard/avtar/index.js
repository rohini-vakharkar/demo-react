import React from 'react'
import { Avatar } from '@mui/material';

export default function Profile(props) {
    const {src,id}=props
  return (
    <div>    
      <Avatar id={id} src={src} />
    </div>
  );
}
