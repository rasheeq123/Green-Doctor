import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Main = () => {
  return (
    <div>
    <Navbar/>
     <Outlet/>  {/*srf saare child route ka result show hoga*/}
     <Footer/>
    </div>
  )
}

export default Main;