import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Prediction from './Prediction'

const User = () => {
  return (
    <>
    <Navbar/>
    <Prediction/>
    <Outlet/>
    </>
  )
}

export default User