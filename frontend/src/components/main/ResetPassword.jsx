import React, { useRef } from 'react'

const ResetPassword = () => {
    const emailRef = useRef(null);
    const otpRef = useRef(null);
    const sendOTP = async() =>{
        const res = await fetch(`${import.meta.env.VITE_API_URL}/util/sendotp`,{
            method: 'POST',
            body: JSON.stringify({email:emailRef.current.value}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(res.status);
    }
        const verifyOTP = async () =>{
            const res = await fetch(`${import.meta.env.VITE_API_URL}/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`)
            console.log(res.status)
        }
    
  return (
    <div >
        <h1>Reset Your Password</h1>
        <label htmlFor="">Enter Registered Email</label>
        <input type="text" ref={emailRef} />
        <button onClick={sendOTP}>Send OTP</button>
        <input type="text" ref={otpRef} />
        <button onClick={verifyOTP}>verify otp</button>
    </div>
  )
}

export default ResetPassword;