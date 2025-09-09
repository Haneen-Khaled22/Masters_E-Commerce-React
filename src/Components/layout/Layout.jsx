import React, { useState } from 'react'
import NavBar from '../main Navbar/NavBar'
import { Outlet } from 'react-router-dom'

import FirstNavbar from '../first Navbar/FirstNavbar'
import Footer from '../footer/Footer'
import LastNavbar from '../last Navbar/LastNavbar'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'


function Layout() {

  const [searchTerm,setsearchTerm] = useState("")

    

    return (
       <div >
        <ScrollToTop/>
  <FirstNavbar />
    <div className="sticky top-0 z-50">
  
  <NavBar searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
  <LastNavbar />
</div>
  

  <div >
    <Outlet context={{searchTerm}}/>
  </div>
  <ScrollToTopButton />

  <Footer />
</div>

    )
}

export default Layout
