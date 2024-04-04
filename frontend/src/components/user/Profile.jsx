import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
import LogoutIcon from "@mui/icons-material/Logout";
import useAppContext from "../../context/AppContext";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SendIcon from "@mui/icons-material/Send";
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
  const [openModal, setOpenModal] = useState(false);
  const { logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleConfirmLogout = () => {
    logout();
    navigate("/main/home");
  };
  return (
    <>
      <Container sx={{ mt: 13, mb: 5 }}>
        <Grid container spacing={2}>
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
              <Typography variant="h3" mb={2} mt={2} fontSize="1.6rem" color="#333333">
                Rasheeq Zehra
              </Typography>
              <p style={{ color: '#333333' }}>Fetching user info....</p>
              <Modal open={openModal} onClose={handleCloseModal}>
                <Paper
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <Typography variant="h5">Confirm Logout</Typography>
                  <Typography sx={{ mt: 2 }}>
                    Are you sure you want to logout?
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      sx={{}}
                      onClick={handleConfirmLogout}
                    >
                      Yes, Logout
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Paper>
              </Modal>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  textTransform: "none",
                  width: { xs: "60%", sm: "160px" },
                  fontSize: 15,
                  borderRadius: 10,
                }}
                onClick={handleLogout}
              >
                <LogoutIcon fontSize="small"  />
                Logout
              </Button>
              <Container sx={{mt:0}}>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  textTransform: "none",
                  width: { xs: "60%", sm: "160px" },
                  fontSize: 15,
                  borderRadius: 10,
                }}
              >
                Talk to us
                <SendIcon fontSize="small" color="color: '#333333'" sx={{ ml: 1 }} />
              </Button>
              </Container>
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
                style={{ maxHeight: "80px" }}
              />
              <Typography
                variant="h3"
                mb={1}
                mt={1}
                fontSize="1.58rem"
                color="#333333"
              >
                Grow with Confidence
              </Typography>
              <Typography
                sx={{ mb: 2, textAlign: "center" }}
                color="#333333"
              >
                We provide tailored treatment plans and proactive measures to
                combat plant disease.Designed for urban farmers, farmers and
                amateur gardener to protect their crops/plants and boost
                production.
              </Typography>
              <Button
                variant="text"
                color="success"
                sx={{ textTransform: "none", fontSize: "18px" }}
              >
                Premium
                <WorkspacePremiumIcon fontSize="small"/>
              </Button>
              <Box sx={{ mt: 2 }}>
                <NavLink to="/user/history">
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{
                      textTransform: "none",
                      fontSize: "16px",
                      borderRadius: 5,
                      width: "100%",
                      mb: 1,
                    }}
                  >
                    Detailed Diagnosis
                  </Button>
                </NavLink>
                <NavLink to="/user/dashboard">
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{
                      textTransform: "none",
                      fontSize: "16px",
                      borderRadius: 5,
                      width: "100%",
                      mb: 1,
                    }}
                  >
                    Go to prediction page
                  </Button>
                </NavLink>
                <NavLink to="/main/home">
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{
                      textTransform: "none",
                      fontSize: "16px",
                      borderRadius: 5,
                      width: "100%",
                    }}
                  >
                    Go to home page
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
