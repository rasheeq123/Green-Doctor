import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword = () => {
  const emailRef = useRef(null);
  const otpRef = useRef(null);

  const sendOTP = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/util/sendotp`, {
      method: "POST",
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      toast.success("OTP sent to registered email", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.error("Failed to send OTP", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  //   console.log(res.status);
  // };
  const verifyOTP = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/util/verifyotp/${
        emailRef.current.value
      }/${otpRef.current.value}`
    );

    if (res.status === 200) {
      toast.success("OTP verified successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.error("Failed to verify OTP", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  //   console.log(res.status);
  // };

  return (
    <>
      <ToastContainer />
      <Box
        sx={{
          backgroundImage:
            "radial-gradient(" +
            "circle at 20% 100%, " +
            "rgba(184, 184, 184, 0.1) 0%, " +
            "rgba(184, 184, 184, 0.1) 33%, " +
            "rgba(96, 96, 96, 0.1) 33%, " +
            "rgba(96, 96, 96, 0.1) 66%, " +
            "rgba(7, 7, 7, 0.1) 66%, " +
            "rgba(7, 7, 7, 0.1) 99%" +
            "), " +
            "linear-gradient(40deg, #040a22, #162561, #202e64, #6f7aa6)",
          height: "105vh",
        }}
      >
        <Box sx={{ mb: 15 }}>
          <Grid container>
            <Grid item md={4} sx={{ mx: "auto" }}>
              <Card
                sx={{
                  height: 550,
                  boxShadow: 5,
                  borderRadius: 3,
                  p: 2,
                  mt: 15,
                }}
              >
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                  Reset your password
                </Typography>
                <CardContent>
                  <form>
                    <TextField
                      id="email"
                      ref={emailRef}
                      required
                      type="email"
                      label="Enter Registered Email"
                      fullWidth
                      variant="outlined"
                      color="success"
                      sx={{ mt: 0 }}
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      color="success"
                      sx={{ mt: 2, borderRadius: 5 }}
                      onClick={sendOTP}
                    >
                      Send OTP
                    </Button>
                    <TextField
                      id="text"
                      ref={otpRef}
                      required
                      type="text"
                      label="Enter OTP"
                      fullWidth
                      variant="outlined"
                      color="success"
                      sx={{ mt: 2 }}
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      color="success"
                      sx={{ mt: 2, borderRadius: 5 }}
                      onClick={verifyOTP}
                    >
                      verify otp
                    </Button>
                    <TextField
                      id="text"
                      ref={otpRef}
                      required
                      type="text"
                      label="Enter new password"
                      fullWidth
                      variant="outlined"
                      color="success"
                      sx={{ mt: 2 }}
                    />
                    <TextField
                      id="text"
                      ref={otpRef}
                      required
                      type="text"
                      label="Confirm new password"
                      fullWidth
                      variant="outlined"
                      color="success"
                      sx={{ mt: 2 }}
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      color="success"
                      sx={{ mt: 2, borderRadius: 5 }}
                      // onClick={verifyOTP}
                    >
                      Reset Password
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ResetPassword;
