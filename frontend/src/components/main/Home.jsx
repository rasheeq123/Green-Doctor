import { Box, Typography } from '@mui/material';
import React from 'react'

const Home = () => {
  return (
    <>
    <div
  className='bghome'
  style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',  // Vertical centering
    alignItems: 'center',      // Horizontal centering
    backgroundAttachment: 'fixed',
    backgroundImage: 'radial-gradient(' +
      'circle at 20% 100%, ' +
      'rgba(184, 184, 184, 0.1) 0%, ' +
      'rgba(184, 184, 184, 0.1) 33%, ' +
      'rgba(96, 96, 96, 0.1) 33%, ' +
      'rgba(96, 96, 96, 0.1) 66%, ' +
      'rgba(7, 7, 7, 0.1) 66%, ' +
      'rgba(7, 7, 7, 0.1) 99%' +
    '), ' +
    'linear-gradient(40deg, #040a22, #162561, #202e64, #6f7aa6)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
  }}
> 
    <Typography  variant="h1" mt={0} sx={{color: 'white', textAlign: 'center', fontSize:'10vw'}} >
      Green Doctor </Typography>
    <Typography variant='h3' sx={{color: 'white', textAlign: 'center', fontSize:'3vw'}}>
    Where Leaves Speak and We Listen.</Typography>
    </div>
    </>
  )
}

export default Home;