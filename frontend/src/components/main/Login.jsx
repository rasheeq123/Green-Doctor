import { Button, Card, CardContent, Paper, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div className='py-5 vh-100 bg-body-secondary'>
      <div className="col-md-4 mx-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="my-3">Login form</h2>

            <Paper>
              <Card>
                <CardContent>
                  
              <TextField label="Email Address" variant='outlined' color='error' helperText="enter mail Id" fullWidth />
              <Button variant="contained" disableElevation>
              Login
            </Button>
                </CardContent>
              </Card>
            </Paper>
            

          </div>
        </div>
      </div>
    </div>

  )
}

export default Login;