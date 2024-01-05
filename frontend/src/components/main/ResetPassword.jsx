import { AccountCircle } from '@mui/icons-material';
import { Button, Card, CardContent, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react'

const ResetPassword = () => {
    const emailRef = useRef(null);
    const otpRef = useRef(null);
    const sendOTP = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/util/sendotp`, {
            method: 'POST',
            body: JSON.stringify({ email: emailRef.current.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(res.status);
    }
    const verifyOTP = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`)
        console.log(res.status)
    }

    return (
        <div >
            <Typography variant='h3' sx={{ textAlign: 'center', mt: 16 }}>Reset your password</Typography>
            <Paper sx={{ boxShadow: 0, mt: 2 }}>
                <Grid container>
                    <Grid item md={4} sx={{ mx: 'auto' }}>
                        <Card sx={{
                            height: 380,
                            boxShadow: 5,
                            borderRadius: 3,
                            p: 5
                        }}>
                            <CardContent>
                                <form>
                                    
                                    <TextField  id="email" ref={emailRef}
                                        required type="email" label="Enter Registered Email" fullWidth variant='outlined' color='success'  sx={{ mt: 2 }}
                                        />
                                    <Button fullWidth variant='contained'color='success' sx={{ mt: 2,borderRadius:5 }} onClick={sendOTP}>Send OTP</Button>
                                    <TextField id="text" ref={otpRef} 
                                    required type="text" label="Enter OTP" fullWidth variant='outlined' color='success'  sx={{ mt: 2 }}
                                    />
                                    <Button fullWidth variant='contained'color='success' sx={{ mt: 2, borderRadius:5 }} onClick={verifyOTP} >verify otp</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    )
};

export default ResetPassword;