import React, { useState } from 'react'
import NavBar from '../main Navbar/NavBar'
import { Outlet } from 'react-router-dom'

import FirstNavbar from '../first Navbar/FirstNavbar'
import Footer from '../footer/Footer'
import LastNavbar from '../last Navbar/LastNavbar'
import ScrollToTop from '../ScrollToTop/ScrollToTop'


function Layout() {

  const [searchTerm,setsearchTerm] = useState("")

    

    return (
       <div >
        <ScrollToTop/>
  
    <div className="sticky top-0 z-50">
  <FirstNavbar />
  <NavBar searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
  <LastNavbar />
</div>
  

  <div >
    <Outlet context={{searchTerm}}/>
  </div>

  <Footer />
</div>

    )
}

export default Layout
