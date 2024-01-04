import { Box, Button, Card, CardContent, Divider, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react';
import { AccountCircle } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { NavLink, useNavigate } from 'react-router-dom';
import useAppContext from '../../context/AppContext';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import GoogleIcon from '@mui/icons-material/Google';


const Login = () => {  
const navigate = useNavigate();
const { setLoggedIn } = useAppContext();

const loginform= useFormik ({
  initialValues: {
      email:'',
      password:''
  },
  onSubmit: async (values, {resetForm})=> {
      console.log(values);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/authenticate`,{
          method: 'POST',
          body:JSON.stringify(values),
          headers:{
              'Content-Type':'application/json'
          }
      });
      console.log(res.status);
          if(res.status===200){
              Swal.fire({
                  icon:'success',
                  title:'Login Successfully'
                  
              })
              navigate("/main/home");
              setloggedIn(true);
              const data= await res.json();
              console.log(data);
              sessionStorage.setItem('user', JSON.stringify(data));
            
          }
      
          else if(res.status===400){
              Swal.fire({
                  icon:'error',
                  title:'Login failed',
                  text:'Email or password is invalid'
                  
              })
          }
          else{  
              Swal.fire({
                  icon:'error', 
                  title:'Error',
                  text:'Something went wrong!!'
              })
          
          }
          resetForm();
  }
});
  return (
    <div >

      <Typography variant='h3' sx={{textAlign: 'center', mt: 2}}>Begin with Login</Typography>
      <Paper sx={{ boxShadow: 0, mt: 2 }}>
        <Grid container>
          <Grid item md={4} sx={{ mx: 'auto' }}>
            <Card sx={{
              height: 430, 
              boxShadow: 5,
              borderRadius: 3,
              p: 4
            }}>
              <CardContent>
              <form onSubmit={loginform.handleSubmit} >
                <TextField
                id="email" 
                onChange={loginform.handleChange}
                value={loginform.values.email}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start" >
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                  required type="email" label="Email Address" error={loginform.touched.email && loginform.error.email} helperText={loginform.touched.email && loginform.error.email} variant='outlined' color='success' fullWidth sx={{ mt: 2 }} />

                <TextField 
                id="password" 
                onChange={loginform.handleChange} 
                value={loginform.values.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start" >
                      <VisibilityIcon />
                    </InputAdornment>
                  )
                }}
                required type="password" label="Password" error={loginform.touched.password && loginform.error.password} helperText={loginform.touched.password && loginform.error.password} variant='outlined' color='success' fullWidth sx={{ mt: 2 }} />
                <Box sx={{ textAlign: 'center' }}>
                  <Button type="submit" variant="contained" disableElevation sx={{ mt: 3, borderRadius: 5}} fullWidth color="success">
                    Login
                  </Button>
                  <NavLink to="/main/resetpassword">
                  <Button type="submit" variant="outlined" disableElevation sx={{ mt: 2, borderRadius: 5, textTransform: 'none'}} fullWidth color="success">
                    Forget Password?
                  </Button>
                  </NavLink>
                  <Divider sx={{ mt: 3}} orientation="horizontal" variant="fullWidth" >or </Divider> 
                  <Button type="submit" variant="outlined" disableElevation sx={{ mt: 2, borderRadius: 5, textTransform: 'none'}} fullWidth color="success">
                  <InputAdornment position="start" >
                        <GoogleIcon />
                      </InputAdornment>
                    Sign in with Google
                  </Button>
                  <p variant='h6' >Dont Have an account?
                    <NavLink
                    to="/main/signup">Sign up</NavLink></p>
                </Box>
                </form>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Paper>
    </div >
  )
};
export default Login;