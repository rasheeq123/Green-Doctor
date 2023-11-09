import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Main = () => {
  return (
    <div>
    <Navbar/>
     <Outlet/>  {/*srf saare child route ka result show hoga*/}
    </div>
  )
}

export default Main