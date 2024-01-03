import { Typography } from '@mui/material';
import React from 'react'

const Home = () => {
  return (
    <>
    <Typography variant="h1" mt={2} sx={{color: 'success.main', textAlign: 'center'}} >
      Green Doctor </Typography>
    <Typography variant='h3' sx={{color: 'success.main', textAlign: 'center'}}>
    Where Leaves Speak and We Listen.</Typography>
    
    </>
  )
}

export default Home;