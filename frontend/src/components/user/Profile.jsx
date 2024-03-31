import { Avatar, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Container sx={{ mt: 15, mb: 12 }}>
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
                  width: 180,
                  height: 180,
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
              <Typography variant="h3" mb={2} mt={20} fontSize="1.6rem">
                Diagnosed graph here
              </Typography>
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
              <NavLink to="/user/dashboard"><Button variant="contained" color="primary" sx={{mt:1, mb: 1,textTransform: "none",fontSize: "18px", borderRadius:5,width: "100%",}}> Go to prediction page</Button></NavLink>
              <NavLink to="/user/history"><Button variant="contained" color="primary" sx={{mb: 1,textTransform: "none",fontSize: "18px", borderRadius:5,width: "100%"}}>Detailed Diagnosis</Button></NavLink>
              <NavLink to="/main/home"><Button variant="contained" color="primary" sx={{mb: 1,textTransform: "none",fontSize: "18px", borderRadius:5,width: "100%"}}> Return to home page</Button></NavLink>
              
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
