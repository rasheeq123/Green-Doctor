import { Button, Card, CardContent, Grid, Paper, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div >
            <h2 className="my-3"><center>Login form</center></h2>

            <Paper sx={{boxShadow:0}}>
              <Grid container>
                <Grid item md={3} sx={{mx: 'auto'}}>

                  <Card sx={{
                    height: 200, bgcolor: 'background.card',
                    boxShadow: 4,
                    borderRadius: 3,
                    p: 2
                  }}>
                    <CardContent>

                      <TextField label="Email Address" variant='outlined' color='error'  fullWidth />
                      <TextField label="Password" variant='outlined' color='error'  fullWidth sx={{mt:2}} />
                      <Button variant="contained" disableElevation sx={{mt:2}}>
                        Login
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>


          </div>
        

  )
}

export default Login;