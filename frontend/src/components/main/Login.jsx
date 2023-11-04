import { Button, Paper, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <Paper>Please Login 
        <Button variant="contained">Outlined</Button>
        <TextField sx={{mt: 10}} label="Email Address" variant='filled' color='error' helperText="enter something" fullWidth />
    </Paper>
  )
}

export default Login;