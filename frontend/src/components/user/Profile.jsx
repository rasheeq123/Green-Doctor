import { Avatar, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

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
              <p>This is column 1 content.</p>
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
              <h2>Column 2</h2>
              <p>This is column 2 content.</p>
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
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
