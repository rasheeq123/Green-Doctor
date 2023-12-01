import { Box, Button, Card, CardContent, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react';
import { AccountCircle } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';


const Login = () => {
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