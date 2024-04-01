import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);
const chartData = {
  labels: [
    "Fruit",
    "Crop",
    "Flower",
    "Vegetable",
    "Flower",
    "Crop",
    "Vegetable",
  ],
  datasets: [
    {
      label: "No  of Predictions",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const Profile = () => {
  return (
    <>
      <Container sx={{ mt: 15, mb: 15 }}>
        <Grid container spacing={2} style={{ height: "500px" }}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                p: 2,
                textAlign: "center",
                bgcolor: "#f0f0f0",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://avatars.githubusercontent.com/u/108568853?v=4"
                sx={{
                  display: "block",
                  margin: "auto",
                  width: 150,
                  height: 150,
                }}
              />
              <Typography variant="h3" mb={2} mt={2} fontSize="1.6rem">
                Rasheeq Zehra
              </Typography>
              <p>user detail here</p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              sx={{
                p: 2,
                textAlign: "center",
                bgcolor: "#f0f0f0",
                height: "100%",
                overflow: "hidden",
              }}
            >
              {/* <Typography variant="h3" mb={2} mt={20} fontSize="1.6rem">
                Diagnosed graph here
              </Typography> */}
              <div className="container">
                <Bar data={chartData} />
                <hr />
                <Line data={chartData} />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                p: 2,
                textAlign: "center",
                bgcolor: "#f0f0f0",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/GD_Logo-.png"
                alt="Logo"
                style={{ maxHeight: "150px" }}
              />
              <Typography
                variant="h3"
                mb={2}
                mt={2}
                fontSize="1.6rem"
                color="textSecondary"
                >
                Grow with Confidence
              </Typography>
                <Box sx={{mt:15}}>
              <NavLink to="/user/dashboard">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 1,
                    mb: 1,
                    textTransform: "none",
                    fontSize: "18px",
                    borderRadius: 5,
                    width: "100%",
                  }}
                >
                  {" "}
                  Go to prediction page
                </Button>
              </NavLink>
              <NavLink to="/user/history">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mb: 1,
                    textTransform: "none",
                    fontSize: "18px",
                    borderRadius: 5,
                    width: "100%",
                  }}
                >
                  Detailed Diagnosis
                </Button>
              </NavLink>
              <NavLink to="/main/home">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mb: 1,
                    textTransform: "none",
                    fontSize: "18px",
                    borderRadius: 5,
                    width: "100%",
                  }}
                >
                  {" "}
                  Return to home page
                </Button>
              </NavLink>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
