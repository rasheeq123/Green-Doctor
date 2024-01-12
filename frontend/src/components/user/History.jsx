import React from 'react'
import Navbar from '../main/Navbar'
import { Outlet } from 'react-router-dom'


const History = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>

    </>
  )
}

export default History;