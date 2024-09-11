import React from 'react'
import Heading from './Heading'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
        <Heading/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout