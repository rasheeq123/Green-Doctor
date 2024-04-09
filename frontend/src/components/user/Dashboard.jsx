import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Container,
  Button,
  styled,
  createTheme,
  Paper,
  Box
} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  
  margin: "auto", 
});

const UserDashboard = () => {
  const handleCategorySelect = (category) => {
    console.log('Category selected:', category);
    toast.success(`${category} category selected`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  return (
    <>
    <div style={{ marginTop: 50 }}>
      <Typography variant="h4" align="center" gutterBottom mt={15}>
        Select the category for prediction
      </Typography>
      <ToastContainer />
      <Container sx={{ mb: 5, mt: 5 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={3}>
            <Box>
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
                  onClick={() => handleCategorySelect("flower")}
                  component={Link}
                  to="/user/prediction/flower"
                  variant="contained"
                  fullWidth
                  size="medium"
                  style={{
                    color: "black",
                    fontWeight: "800",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    border: "2px solid transparent", 
                    transition: "border-color 0.3s ease", 
                  }}
                  onMouseOver={(event) =>
                    (event.target.style.borderColor = "white")
                  }
                  onMouseOut={(event) =>
                    (event.target.style.borderColor = "transparent")
                  }
                >
                  Flowers
                </Button>
              </Container>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
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
                  onClick={() => handleCategorySelect("fruit")}
                  component={Link}
                  to="/user/prediction/fruit"
                  variant="contained"
                  fullWidth
                  size="medium"
                  style={{
                    color: "black",
                    fontWeight: "800",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    border: "2px solid transparent", 
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseOver={(event) =>
                    (event.target.style.borderColor = "white")
                  }
                  onMouseOut={(event) =>
                    (event.target.style.borderColor = "transparent")
                  }
                >
                  Fruits
                </Button>
              </Container>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
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
                  onClick={() => handleCategorySelect("vegetable")}
                  component={Link}
                  to="/user/prediction/vegetable"
                  variant="contained"
                  fullWidth
                  size="medium"
                  style={{
                    color: "black",
                    fontWeight: "800",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    border: "2px solid transparent", 
                    transition: "border-color 0.3s ease", 
                  }}
                  onMouseOver={(event) =>
                    (event.target.style.borderColor = "white")
                  }
                  onMouseOut={(event) =>
                    (event.target.style.borderColor = "transparent")
                  }
                >
                  Vegetables
                </Button>
              </Container>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
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
                  onClick={() => handleCategorySelect("crops")}
                  component={Link}
                  to="/user/prediction/crops"
                  variant="contained"
                  fullWidth
                  size="medium"
                  style={{
                    color: "black",
                    fontWeight: "800",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    border: "2px solid transparent", 
                    transition: "border-color 0.3s ease", 
                  }}
                  onMouseOver={(event) =>
                    (event.target.style.borderColor = "white")
                  }
                  onMouseOut={(event) =>
                    (event.target.style.borderColor = "transparent")
                  }
                >
                  Crops
                </Button>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
    </>
  );
};

export default UserDashboard;
