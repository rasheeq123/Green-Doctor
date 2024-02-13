import { Box, Grid, Typography} from '@mui/material'
import React from 'react'

const Dashboard = () => {
  return (
    <>
    {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <Typography variant="h1"> My Dashboard  </Typography>
      </Box> */}
       <Typography sx={{ mt: 10 }}
 variant="h2" align="center" gutterBottom >
        Select the category
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box title="Flower" to="/user/prediction/flower" sx={{
                width: "480px",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>flower</Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box title="Fruit" to="/user/prediction/fruit"  sx={{
                width: "480px",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>fruit</Box>                                                                
        </Grid>

        <Grid item xs={12} md={6}>
          <Box title="Vegetable" to="/user/prediction/vegetable"  sx={{
                width: "480px",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>Vegetable</Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box title="Crop" to="/user/prediction/crop"  sx={{
                width: "480px",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>Crop</Box>
        </Grid>
      </Grid>
    </>
  )
}
export default Dashboard