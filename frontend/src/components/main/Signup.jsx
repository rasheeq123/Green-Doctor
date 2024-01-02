import { Button, Card, CardContent, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { AccountCircle } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is required')
    .matches('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$', 'Password is invalid'),      // yaha pe hum password me condition dene ke lie ki wo uppercase, lowercase and number include kre , chatgpt se  

  confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {
  const navigate = useNavigate();

  const signupform = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
      
    },

    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      
      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'content-Type': 'application/json'
        }
      })
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Registered Successfully',
          text: 'Login to continue'
        })
        navigate('/main/login');
        resetForm();
      }
      else {  
        Swal.fire({
          icon: 'error', // error defaullt h yaha
          title: 'Error',
          text: 'Something went wrong!!'
        })
      }
      //send values to backend
    },
    validationSchema: SignupSchema
  });

  return (
    <div >
            <Typography variant='h3' sx={{textAlign: 'center', mt: 5}}>Sign Up for Unmatched Benefits</Typography>

            <Paper sx={{boxShadow:0, mt: 5}}>
              <Grid container>
                <Grid item md={5} sx={{mx: 'auto'}}>

                  <Card sx={{
                    height: 450,
                    boxShadow: 5,
                    borderRadius: 1,
                    p: 4
                  }}>
                    <CardContent>
                    <form onSubmit={signupform.handleSubmit}>
                    <TextField 
                      id="name" onChange={signupform.handleChange} 
                      value={signupform.values.name} 
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start" >
                            <AccountCircle />
                          </InputAdornment>
                        )
                      }}
                      required type="name" label="Name" variant='outlined' color='success'  fullWidth sx={{mt:2}}  helperText={signupform.touched.name && signupform.errors.name}/>

                      <TextField 
                      id="email" onChange={signupform.handleChange} 
                      value={signupform.values.email} 
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start" >
                            <AccountCircle />
                          </InputAdornment>
                        )
                      }}
                      required type="email" label="Email Address" variant='outlined' color='success'  fullWidth sx={{mt:2}} helperText={signupform.touched.email && signupform.errors.email}/>
                      <TextField 
                      id="password" onChange={signupform.handleChange} 
                      value={signupform.values.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start" >
                            <VisibilityIcon />
                          </InputAdornment>
                        )
                      }}
                      required type="password" label="Password" variant='outlined' color='success'  fullWidth sx={{mt:2}} helperText={signupform.touched.password && signupform.errors.password}/>
                      <TextField 
                      id="confirm" onChange={signupform.handleChange} 
                      value={signupform.values.confirm} 
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start" >
                            <VisibilityIcon />
                          </InputAdornment>
                        )
                      }}
                      required type="password" label="Confirm Password" variant='outlined' color='success'  fullWidth sx={{mt:2}} helperText={signupform.touched.confirm && signupform.errors.confirm} />
                      
                      <Button type="submit" variant="contained" color='success'  sx={{mt:4, p:2}} fullWidth>
                        Create Account
                      </Button>
                      <center><p>Already an existing user -  
                        <a href="/main/login">Login Here</a>
                      </p>
                      </center>
                      </form>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>


          </div>
        

  )
}

export default Signup;