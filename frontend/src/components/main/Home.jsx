import { Box, Typography } from '@mui/material';
import React from 'react'

const Home = () => {
  return (
    <>
    {/* <div className='bghome' style={{backgroundColor: 'rgb(244, 207, 198)',height: '100vh'}}> */}
    <Typography variant="h1" mt={0} sx={{color: 'success.main', textAlign: 'center'}} >
      Green Doctor </Typography>
    <Typography variant='h3' sx={{color: 'success.main', textAlign: 'center'}}>
    Where Leaves Speak and We Listen.</Typography>
    {/* </div> */}
    </>
  )
}

export default Home;