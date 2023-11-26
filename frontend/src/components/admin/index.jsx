import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <>
    <Navbar />
    <center><h1>ADMIN NAVBAR</h1></center>
    <Outlet />
    </>
  )
}

export default Admin