import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="bghome"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Vertical centering
          alignItems: "center", // Horizontal centering
          backgroundAttachment: "fixed",
          backgroundImage:
            "radial-gradient(" +
            "circle at 20% 100%, " +
            "rgba(184, 184, 184, 0.1) 0%, " +
            "rgba(184, 184, 184, 0.1) 33%, " +
            "rgba(96, 96, 96, 0.1) 33%, " +
            "rgba(96, 96, 96, 0.1) 66%, " +
            "rgba(7, 7, 7, 0.1) 66%, " +
            "rgba(7, 7, 7, 0.1) 99%" +
            "), " +
            "linear-gradient(40deg, #040a22, #162561, #202e64, #6f7aa6)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Typography
          variant="h1"
          mt={0}
          sx={{ color: "white", textAlign: "center", fontSize: "10vw" }}
        >
          Green Doctor{" "}
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "white", textAlign: "center", fontSize: "3vw" }}
        >
          Where Leaves Speak and We Listen.
        </Typography>
      </div>
        <Typography variant="h2" textAlign={"center"} sx={{ mt: 5,mb:10}}>
          Boost your crop production
        </Typography>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/* <Grid xs={6} > */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  // mt: 5,
                  width: "480px",
                  height: "500px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Typography variant="h4" fontWeight='semibold' mb={2}>Diagnose your sick crop</Typography>
                <Typography variant="h5" mb={3}>Take a photo of your sick crop and get a free diagnosis and treatment suggestions – all in a few seconds!</Typography>
                <NavLink to="/user">
                <Button sx={{textTransform:'none',borderRadius:'28px',mt:4,width:'50%',fontSize:'18px',py:1}} variant='contained' color='primary'>Get a free diagnosis</Button>
                </NavLink>
              </Box>
            </Grid>
            {/* <Grid xs={6}> */}
            <Grid item xs={12} sm={6}>
              <Container
               sx={{display: "flex",
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/H2.jpg')`,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                  minHeight: 400,
                  width:'100%',
                  // m:5,
                  // mt:10,
                  // backgroundSize: '100% 100%', // Cover the entire Paper
                  backgroundSize: "cover",
                  backgroundPosition: 'center',
                  }}
                >
                </Container>
            </Grid>
          </Grid>
        </Container>

{/* ------------------------------------------------------------------------------------------------------- */}
{/* 2nd container started */}

        <Container sx={{mt:5,}}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            
            {/* <Grid xs={6}> */}
            <Grid item xs={12} sm={6}>
              <Container
               sx={{display: "flex",
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/H2.jpg')`,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                  minHeight: 400,
                  width:'100%',
                  // m:5,
                  // mt:10,
                  // backgroundSize: '100% 100%', // Cover the entire Paper
                  backgroundSize: "cover",
                  backgroundPosition: 'center',
                  }}
                >
                </Container>
            </Grid>
            {/* <Grid xs={6}> */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  // m:10,
                  width: "480px",
                  height: "500px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Typography variant="h4" mb={2} fontWeight='semibold'>Find the right treatment</Typography>
                <Typography mb={3} variant="h5">Get great deals on agricultural products from your local retailers. Compare prices, learn about the products and how to use them.</Typography>
                <NavLink to="/user">
                <Button sx={{textTransform:'none',borderRadius:'28px',mt:4,mb:10,width:'50%',fontSize:'18px',py:1}} variant='contained' color='primary'>Get a free treatment</Button>
                </NavLink>
              </Box>
            </Grid>
          </Grid>
        </Container>
    </>
  );
};

export default Home;
