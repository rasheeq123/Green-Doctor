import { Typography } from '@mui/material';
import React from 'react'

const Home = () => {
  return (
    <>
    <Typography variant="h1" mt={20} sx={{color: 'success.main', textAlign: 'center'}} >
      Guardians of Green </Typography>
    <Typography variant='h3' sx={{color: 'success.main', textAlign: 'center'}}>
      Plant Protection Made Simple</Typography>
    </>
  )
}

export default Home;