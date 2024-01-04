import { AccountCircle } from '@mui/icons-material';
import { Card, CardContent, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material';
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
            <Typography variant='h3' sx={{ textAlign: 'center', mt: 2 }}>Reset your password</Typography>
            <Paper sx={{ boxShadow: 0, mt: 2 }}>
                <Grid container>
                    <Grid item md={4} sx={{ mx: 'auto' }}>
                        <Card sx={{
                            height: 250,
                            boxShadow: 5,
                            borderRadius: 3,
                            p: 4
                        }}>
                            <CardContent>
                                {/* <form onSubmit={loginform.handleSubmit} > */}
                                <form>
                                    <TextField
                                        id="email"
                                        // onChange={loginform.handleChange}
                                        // value={loginform.values.email}

                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                <AccountCircle/>
                                                </InputAdornment>
                                            )
                                        }}
                                        required type="email" label="Enter Registered Email"
                                        // error={loginform.touched.email && loginform.error.email} helperText={loginform.touched.email && loginform.error.email} 

                                        variant='outlined' color='success' fullWidth sx={{ mt: 2 }} />

                                    {/* <label htmlFor="">Enter Registered Email</label> */}
                                    <input id="email" ref={emailRef}
                                        required type="email" label="Enter Registered Email" variant='outlined' color='success' fullWidth sx={{ mt: 2 }} />
                                    <button onClick={sendOTP}>Send OTP</button>
                                    <input type="text" ref={otpRef} />
                                    <button onClick={verifyOTP}>verify otp</button>
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