import { Button, Card, CardContent, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { AccountCircle } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Signup = () => {
  return (
    <div >
            <Typography variant='h3' sx={{textAlign: 'center', mt: 5}}>Sign Up for Unmatched Benefits</Typography>

            <Paper sx={{boxShadow:0, mt: 5}}>
              <Grid container>
                <Grid item md={5} sx={{mx: 'auto'}}>

                  <Card sx={{
                    height: 350,
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
                      required label="Email Address" variant='outlined' color='success'  fullWidth sx={{mt:2}}/>
                      <TextField 
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start" >
                            <VisibilityIcon />
                          </InputAdornment>
                        )
                      }}
                      required type="password" label="Password" variant='outlined' color='success'  fullWidth sx={{mt:2}} />
                      <TextField 
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start" >
                            <VisibilityIcon />
                          </InputAdornment>
                        )
                      }}
                      required type="password" label="Confirm Password" variant='outlined' color='success'  fullWidth sx={{mt:2}} />
                      <Button variant="contained" color='success' disableElevation sx={{mt:5, p:2}} fullWidth>
                        Create Account
                      </Button>
                      <center><p>Already an existing user -  
                        <a href="/main/login">Login Here</a>
                      </p>
                      </center>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>


          </div>
        

  )
}

export default Signup;