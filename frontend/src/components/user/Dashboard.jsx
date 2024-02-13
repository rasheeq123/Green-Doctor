import { Box, Container, Grid, Typography} from '@mui/material'
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
                display: "flex",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/flower.jpg')`,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
                minHeight: 400,
                width: "60%",
                // backgroundSize: '100% 100%', // Cover the entire Paper
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box title="Fruit" to="/user/prediction/fruit"  sx={{
                display: "flex",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/fruit.jpg')`,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
                minHeight: 400,
                width: "60%",
                // backgroundSize: '100% 100%', // Cover the entire Paper
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></Box>                                                                
        </Grid>

        <Grid item xs={12} md={6}>
          <Container title="Vegetable" to="/user/prediction/vegetable"  sx={{
                display: "flex",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/veg.jpg')`,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
                minHeight: 400,
                width: "60%",
                // backgroundSize: '100% 100%', // Cover the entire Paper
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></Container>
        </Grid>
        <Grid item xs={12} md={6}>
          <Container title="Crop" to="/user/prediction/crop"  sx={{
                display: "flex",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/crop.jpg')`,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
                minHeight: 400,
                width: "60%",
                // backgroundSize: '100% 100%', // Cover the entire Paper
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></Container>
        </Grid>
      </Grid>
    </>
  )
}
export default Dashboard