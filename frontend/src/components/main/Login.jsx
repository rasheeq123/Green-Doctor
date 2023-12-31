import { Box, Button, Card, CardContent, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react';
import { AccountCircle } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import useAppContext from '../../context/AppContext';
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useAppContext();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    // call back hmko nhi pta kb call hoga lekin aap call hoga sb condition met hogi  jaise isme submit kr  rhe
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      const res = await fetch(`${process.env.REACT_APP_VINTIMART_URL}/user/authenticate`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Login success",
        });
        navigate("/");
        setLoggedIn(true);
        const data = await res.json();
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data));
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Email or Password is inavalid",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }
      resetForm();
      // send values to backened.
    },
    validationSchema: LoginSchema,
  });
  return (
    <div >

      <Typography variant='h2' sx={{textAlign: 'center', mt: 5}}>Begin with Login</Typography>
      <Paper sx={{ boxShadow: 0, mt: 5 }}>
        <Grid container>
          <Grid item md={4} sx={{ mx: 'auto' }}>
            <Card sx={{
              height: 250, 
              boxShadow: 5,
              borderRadius: 1,
              p: 4
            }}>
              <CardContent>
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start" >
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                  required label="Email Address" variant='outlined' color='success' fullWidth sx={{ mt: 2 }} />

                <TextField 
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start" >
                      <VisibilityIcon />
                    </InputAdornment>
                  )
                }}
                required type="password" label="Password" variant='outlined' color='success' fullWidth sx={{ mt: 2 }} />
                <Box sx={{ textAlign: 'center' }}>
                  <Button variant="contained" disableElevation sx={{ mt: 3}} fullWidth color="success">
                    Login
                  </Button>
                  <p variant='h6' >Dont Have an account - 
                    <a href="/main/signup"> Create account</a></p>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div >
  )
}
export default Login;