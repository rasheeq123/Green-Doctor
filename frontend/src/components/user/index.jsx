import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const User = () => {
  return (
    <>
    <Navbar/>
    <center><h1>USER NAVBAR</h1></center>
    <Outlet/>
    </>
  )
}

export default User