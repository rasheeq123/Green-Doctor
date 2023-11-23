import { Button, Card, CardContent, Grid, Paper, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div >
            <h2 className="my-3"><center>Signup To Continue</center></h2>

            <Paper sx={{boxShadow:0}}>
              <Grid container>
                <Grid item md={5} sx={{mx: 'auto'}}>

                  <Card sx={{
                    height: 300, bgcolor: 'background.card',
                    boxShadow: 5,
                    borderRadius: 2,
                    p: 4
                  }}>
                    <CardContent>

                      <TextField required label="Email Address" variant='outlined' color='error'  fullWidth sx={{mt:2}}/>
                      <TextField required label="Password" variant='outlined' color='error'  fullWidth sx={{mt:2}} />
                      <TextField required label="Confirm Password" variant='outlined' color='error'  fullWidth sx={{mt:2}} />
                      <center><Button variant="contained" disableElevation sx={{mt:3}}>
                        Create Account
                      </Button>
                      </center>
                      <center><p>Already an existing user -  
                        <a href="#login">Login Here</a>
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

export default Login;