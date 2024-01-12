import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Prediction from './Prediction'
import Footer from '../main/Footer'

const User = () => {
  return (
    <>
    <Navbar/>
    {/* <Prediction/> */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default User