import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Container, Button } from "@mui/material";

const Prediction = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <Typography variant="h2" align="center" gutterBottom mt={12}>
        Select the Category
      </Typography>
      <Container sx={{mb:5}}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={3}>
          <Container
            title="Flower"
            to="/user/prediction/flower"
            sx={{
              display: "flex",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/flower.jpg')`,
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
              to="/user/prediction/flower"
              variant="contained"
              fullWidth
              size="large"
              color="primary"
            >
              Flower
            </Button>
          </Container>
        </Grid>
        <Grid item xs={12} md={3}>
          <Container
            title="Fruit"
            to="/user/prediction/fruit"
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
        </Grid>
        <Grid item xs={12} md={3}>
          <Container
            title="Vegetable"
            to="/user/prediction/vegetable"
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
        </Grid>
        <Grid item xs={12} md={3}>
          <Container
            title="Crop"
            to="/user/prediction/crops"
            sx={{
              display: "flex",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/crop.jpg')`,
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
              to="/user/prediction/crops"
              variant="contained"
              fullWidth
              size="large"
              color="primary"
            >
              Crop
            </Button>
          </Container>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default Prediction;
