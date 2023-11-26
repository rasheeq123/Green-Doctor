import { Box, Button, Card, CardContent, Grid, InputAdornment, Paper, TextField } from '@mui/material'
import React from 'react';
import { AccountCircle } from '@mui/icons-material';

const Login = () => {
  return (
    <div >

      <h2 className="my-3"><center>Login Form</center></h2>
      <Paper sx={{ boxShadow: 0 }}>
        <Grid container>
          <Grid item md={4} sx={{ mx: 'auto' }}>
            <Card sx={{
              height: 250, bgcolor: 'background.card',
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
                  required label="Email Address" variant='outlined' color='error' fullWidth sx={{ mt: 2 }} />

                <TextField required type="password" label="Password" variant='outlined' color='error' fullWidth sx={{ mt: 2 }} />
                <Box sx={{ textAlign: 'center' }}>
                  <Button variant="contained" disableElevation sx={{ mt: 3}} fullWidth >
                    Login
                  </Button>
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