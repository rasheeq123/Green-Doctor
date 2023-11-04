import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Admin