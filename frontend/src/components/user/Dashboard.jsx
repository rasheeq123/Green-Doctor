import { Box, Typography } from '@mui/material'
import React from 'react'

const Dashboard = () => {
  return (
    <>
    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <Typography variant="h1"> My Dashboard  </Typography>
      </Box>
    </>
  )
}

export default Dashboard