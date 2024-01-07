import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../main/Footer'

const Admin = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer/>
    </>
  )
}

export default Admin