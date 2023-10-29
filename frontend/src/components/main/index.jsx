import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Main = () => {
  return (
    <>

    <Navbar/>
     <Outlet/>  {/*srf child route ka result show hoga */}
    </>
  )
}

export default Main