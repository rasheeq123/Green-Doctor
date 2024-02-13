import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Container, Button, styled, createTheme, Paper } from "@mui/material";


const theme = createTheme();

const StyledPaper = styled(Paper)({
  padding: theme.spacing(0),
  border: '1 px solid black',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
      transform: 'scale(1.1)', // Adjust the scale factor as needed
  },
  '& img': {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.1s ease-in-out', // Added transition for the image
    transform: 'scale(1)', // Set the default scale
  },
  // width: '60%', // Adjust the width as needed
  margin: 'auto', // Center the Paper within the Grid itemrash
});

const Prediction = () => {
  
  return (
    <div style={{ marginTop: 50 }}>
      <Typography variant="h4" align="center" gutterBottom mt={15}>
        Select the category for prediction
      </Typography>
      <Container sx={{mb:5, mt:5}}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={3}>
        <StyledPaper>
          <Container
            sx={{
              display: "flex",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/flower.jpg')`,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 2,
              minHeight: 300,
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Button
            // sx={{mt:29}}
              component={Link}
              to="/user/prediction/flower"
              variant="contained"
              fullWidth
              size="large"
              color="primary"
            >
              Flower
            </Button>
          </Container>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={3}>
          <StyledPaper>
          <Container
            sx={{
              display: "flex",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/fruit.jpg')`,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
              minHeight: 300,
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Button
              component={Link}
              to="/user/prediction/fruit"
              variant="contained"
              fullWidth
              size="large"
              color="primary"
            >
              Fruit
            </Button>
          </Container>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={3}>
        <StyledPaper>
          <Container
            sx={{
              display: "flex",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/veg.jpg')`,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
              minHeight: 300,
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Button
              component={Link}
              to="/user/prediction/vegetable"
              variant="contained"
              fullWidth
              size="large"
              color="primary"
            >
              Vegetable
            </Button>
          </Container>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={3}>
        <StyledPaper>
          <Container
            sx={{
              display: "flex",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/crop.jpg')`,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 2,
              minHeight: 300,
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Button
              component={Link}
              to="/user/prediction/crops"
              variant="contained"
              fullWidth
              size="large"
              color="primary"
            >
              Crop
            </Button>
          </Container>
          </StyledPaper>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default Prediction;
