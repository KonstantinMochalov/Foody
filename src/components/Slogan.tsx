import { Divider, Paper, Typography } from '@mui/material'
import React from 'react'

export const Slogan = () => {
  return (
    <Paper elevation={3}>
      <Typography bgcolor="primary" align='center' variant='h3' sx={{textTransform: "capitalize", margin:2}}>
          Bring a sence of adventure to your kitchen!
          <Divider/>
      </Typography>
    </Paper>  
  )
}
