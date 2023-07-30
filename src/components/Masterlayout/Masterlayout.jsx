import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Masterlayout({userData ,Logout}) {
  return (
   <>
   <Navbar userData={userData} Logout={Logout}/>
<div className="container">
   <Outlet></Outlet>

</div>
   </>
  )
}
