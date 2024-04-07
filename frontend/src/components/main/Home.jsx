import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  createTheme,
  styled,
  Paper,
  keyframes,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import HealthAndSafetySharpIcon from '@mui/icons-material/HealthAndSafetySharp';
import SpaSharpIcon from '@mui/icons-material/SpaSharp';
import AutoGraphSharpIcon from '@mui/icons-material/AutoGraphSharp';

const theme = createTheme();

const StyledPaper = styled(Paper)({
  padding: theme.spacing(0),
  border: "1 px solid black",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
  "& img": {
    width: "100%",
    height: "auto",
    display: "block",
    transition: "transform 0.1s ease-in-out",
    transform: "scale(1)",
  },
  // width: '60%',
  margin: "auto",
});
const beatFade = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
`;
const iconStyle = {
  fontSize: '3rem',
  mb: 3,
  animation: `${beatFade} 2s ease-in-out infinite`,
};
const Home = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const words = ["productive", "efficient", "confident"];
  const images = ["/images/B1.jpg", "/images/G2.jpg", "/images/C1.jpg"];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <Container sx={{ height: "90vh",mt:15}}>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
          <Typography variant="h2" >Green Doctor <br/> makes you more</Typography>
          <Typography variant="h2" fontWeight="bold" sx={{color:'rgb(121, 140, 42)'}}>{words[index]}</Typography>
          <Typography sx={{mt:"40px"}}>Green Doctor empowers farmers and urban gardeners, fostering the growth of our nation. With agriculture at its heart, our country thrives, cultivating prosperity and sustainable development.</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={images[index]} alt="Image" style={{ width: '100%', height: '90%', objectFit: 'center', borderRadius:"8px" }} />
        </Grid>
      </Grid>
      </Container> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundAttachment: "fixed",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('/images/B3.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Typography
          variant="h1"
          mt={0}
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: "10vw",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          Green Doctor{" "}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: "3vw",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          Where Leaves Speak and We Listen.
        </Typography>
      </Box>
      <Typography variant="h2" textAlign={"center"} sx={{ mt: 5, mb: 10 }}>
        Boost your crop production
      </Typography>
      {/* --------------------------------------- I container started----------------------------------------------- */}
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                width: "480px",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h3" fontWeight="semibold" mb={2}>
                Diagnose your crop
              </Typography>
              <Typography variant="h4" mb={0} >
                capture the infected area of your sick crop and get a free diagnosis,
                treatment suggestions – all in a few seconds!
              </Typography>
              <NavLink to="/user/dashboard">
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "28px",
                    mt: 4,
                    width: "60%",
                    fontSize: "25px",
                    py: 1,
                  }}
                  variant="contained"
                  color="primary"
                >
                  Get a free diagnosis
                </Button>
              </NavLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledPaper>
              <Container
                sx={{
                  display: "flex",
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/G1.jpg')`,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 1,
                  minHeight: 500,
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Container>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>

      {/* ---------------------------------------2nd container started----------------------------------------------- */}

      <Container sx={{ mt: 18 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <StyledPaper>
              <Container
                sx={{
                  display: "flex",
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/G2.jpg')`,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 1,
                  minHeight: 500,
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginRight: "30px",
                }}
              ></Container>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                width: "510px",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "50px",
              }}
            >
              <Typography variant="h3" mb={2} fontWeight="semibold">
                Find the right treatment
              </Typography>
              <Typography mb={0} variant="h4">
                Get great deals on agricultural products from your local
                retailers. Compare prices, learn about the products and how to
                use them.
              </Typography>
              <NavLink to="/user/dashboard">
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "28px",
                    mt: 4,
                    mb: 1,
                    width: "60%",
                    fontSize: "25px",
                    py: 1,
                  }}
                  variant="contained"
                  color="primary"
                >
                  Get a free treatment
                </Button>
              </NavLink>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* -------------------------GD in Number---------------------------- */}

      <Container>
      <Typography variant="h3" textAlign={"center"} sx={{ mt: 10 }}> Green Doctor in numbers</Typography>
      <Grid container spacing={2} sx={{mt:5}}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f0f0f0', height: '100%',boxShadow:'4' }}>
        <AccessAlarmsIcon sx={iconStyle} style={{ color: '#333333' }}/>
        <Typography sx={{ color: '#333333' }} variant="h3" mb={2} fontWeight="bold" fontSize="1.5rem"> 1.5 sec</Typography>
        <Typography sx={{ color: '#333333' }} variant="h5" component="h4" color="textSecondary">Get your crop diagnosed in 1.5 sec.</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f0f0f0', height: '100%',boxShadow:'4' }}>
        <HealthAndSafetySharpIcon sx={iconStyle} style={{ color: '#333333' }}/>
        <Typography sx={{ color: '#333333' }} variant="h3" mb={2} fontWeight="bold" fontSize="1.5rem"> 12+</Typography>
        <Typography sx={{ color: '#333333' }} variant="h5" component="h4" color="textSecondary">You'll be able to detect 12+ different kinds of crops!</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f0f0f0', height: '100%',boxShadow:'4' }}>
        <SpaSharpIcon sx={iconStyle} style={{ color: '#333333' }}/>
        <Typography sx={{ color: '#333333' }} variant="h3" mb={2} fontWeight="bold" fontSize="1.5rem"> 100+</Typography>
          <Typography sx={{ color: '#333333' }} variant="h5" component="h4" color="textSecondary">Find the right treatment for more than 100+ diseases.</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f0f0f0', height: '100%',boxShadow:'4' }}>
        <AutoGraphSharpIcon sx={iconStyle} style={{ color: '#333333' }} />
        <Typography sx={{ color: '#333333' }} variant="h3" mb={2} fontWeight="bold" fontSize="1.5rem">93%</Typography>
        <Typography sx={{ color: '#333333' }} variant="h5" component="h4" color="textSecondary">Users report an improvement in their farming of 93%.</Typography>
        </Paper>
      </Grid>
    </Grid>
    </Container>

      {/* --------------------Frequently Asked section--------------------------------------- */}

      <div className="accordion">
        <Typography variant="h3" sx={{ mb: 5, mt: 10 }} textAlign={"center"}>
          Frequently Asked Questions
        </Typography>
        <div className="accordion-item">
          <input type="checkbox" id="accordion1" />
          <label htmlFor="accordion1" className="accordion-item-title">
            <span className="icon" />
            What is Green Doctor, and how does it benefit gardeners & farmers?
          </label>
          <div className="accordion-item-desc">
            Green Doctor is a web Based Solution to identify and solve disease
            in plants/crops. Provides tailored treatment plans and proactive
            measures to combat plant disease.Designed for urban farmers, farmers
            and amateur gardener to protect their crops/plants and boost
            production.
          </div>
        </div>
        <div className="accordion-item">
          <input type="checkbox" id="accordion2" />
          <label htmlFor="accordion2" className="accordion-item-title">
            <span className="icon" />
            How long does it take to see results from Green Doctor?
          </label>
          <div className="accordion-item-desc">
            The time to see results from Green Doctor depends on factors such as
            system response time, internet speed, and the complexity of the
            plant disease.
          </div>
        </div>
        <div className="accordion-item">
          <input type="checkbox" id="accordion3" />
          <label htmlFor="accordion3" className="accordion-item-title">
            <span className="icon" />
            What are the key components of a Green Doctor?
          </label>
          <div className="accordion-item-desc">
            Green Doctor strives to offer a comprehensive and valuable solution
            for plant disease management, ensuring high accuracy, effective
            recommendations, and a user-friendly experience, all at no cost to
            the users.
          </div>
        </div>
        <div className="accordion-item">
          <input type="checkbox" id="accordion4" />
          <label htmlFor="accordion4" className="accordion-item-title">
            <span className="icon" />
            How does Green Doctor helps in country Economy?
          </label>
          <div className="accordion-item-desc">
            Green Doctor plays a vital role in enhancing agricultural
            productivity, reducing costs, promoting sustainability, and
            empowering farmers, all of which contribute to the overall growth
            and resilience of the country's economy, especially in the context
            of India's significant role in food production.
          </div>
        </div>
        <div className="accordion-item">
          <input type="checkbox" id="accordion5" />
          <label htmlFor="accordion5" className="accordion-item-title">
            <span className="icon" />
            Who Manage Green Doctor?
          </label>
          <div className="accordion-item-desc">
            The founders of Green Doctor are Omkar Sharma and Rasheeq Zehra.
            Both are Computer Science Graduate. They initiated the development
            of Green Doctor to address real-time issues related to plant health.
            Green Doctor prioritizes system accuracy, ensuring predictions
            exceed 95%. The platform recommends effective and quality products
            for crop care while offering a clean and simple user interface.
            Importantly, the services provided by Green Doctor are accessible to
            users free of cost. This initiative aligns with the goal of
            promoting sustainable agriculture and supporting the economy through
            enhanced food production.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
