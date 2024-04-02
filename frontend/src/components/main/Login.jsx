import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { NavLink, useNavigate } from "react-router-dom";
import useAppContext from "../../context/AppContext";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import GoogleIcon from "@mui/icons-material/Google";
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loginWithRedirect, user, isLoading } = useAuth0();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const { setLoggedIn } = useAppContext();

  const loginform = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/user/authenticate`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Login Successfully",
        });
        navigate("/main/home");
        setLoggedIn(true);

        const data = await res.json();

        console.log(data);
        if (data.role === "admin") {
          navigate("/admin");
          sessionStorage.setItem("admin", JSON.stringify(data));
        } else {
          navigate("/user/profile");
          sessionStorage.setItem("user", JSON.stringify(data));
        }
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: "Email or password is invalid",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong!!",
        });
      }
      resetForm();
    }, 
  });
  return (
    <Box
      sx={{
        // background: 'linear-gradient(to right, #001F3F, #003366)',
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
        minHeight: "100vh",
      }}
    >
      <Grid container sx={{ mt: 0 }}>
        <Grid item md={4} sx={{ mx: "auto" }}>
          <Card
            sx={{
              height: 510,
              boxShadow: 25,
              borderRadius: 5,
              p: 3,
              mt: 18,
              mb: 15,
            }}
          >
            <CardContent>
              <Typography variant="h4" sx={{ textAlign: "center", mt: 0 }}>
                Begin with Login
              </Typography>
              <form onSubmit={loginform.handleSubmit}>
                <TextField
                  id="email"
                  onChange={loginform.handleChange}
                  value={loginform.values.email}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  required
                  type="email"
                  label="Email Address"
                  error={loginform.touched.email && loginform.errors.email}
                  helperText={loginform.touched.email && loginform.errors.email}
                  variant="outlined"
                  color="success"
                  fullWidth
                  sx={{ mt: 2 }}
                />

                <FormControl
                  required
                  error={
                    loginform.touched.password && loginform.errors.password
                  }
                  helperText={
                    loginform.touched.password && loginform.errors.password
                  }
                  variant="outlined"
                  color="success"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    onChange={loginform.handleChange}
                    value={loginform.values.password}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          // edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

                <Box sx={{ textAlign: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    sx={{ mt: 3, borderRadius: 5 }}
                    fullWidth
                    color="success"
                  >
                    Continue
                  </Button>
                  <NavLink to="/main/resetpassword">
                    <Button
                      type="submit"
                      variant="outlined"
                      disableElevation
                      sx={{ mt: 2, borderRadius: 5, textTransform: "none" }}
                      fullWidth
                      color="success"
                    >
                      Forget Password?
                    </Button>
                  </NavLink>
                  <Divider
                    sx={{ mt: 3 }}
                    orientation="horizontal"
                    variant="fullWidth"
                  >
                    or{" "}
                  </Divider>
                  <Button
                    onClick={(e) => loginWithRedirect() }
                    variant="outlined"
                    disableElevation
                    sx={{
                      mt: 2,
                      borderRadius: 5,
                      textTransform: "none",
                      mb: 1,
                    }}
                    fullWidth
                    color="success"
                  >
                    <InputAdornment position="start">
                      <GoogleIcon />
                    </InputAdornment>
                    Sign in with Google
                  </Button>
                  <p variant="h6">
                    Dont Have an account?
                    <NavLink
                      to="/main/signup"
                      style={{ textDecoration: "none" }}
                    >
                      Sign up
                    </NavLink>
                  </p>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Login;
