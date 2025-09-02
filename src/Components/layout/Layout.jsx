import React from 'react'
import NavBar from '../main Navbar/NavBar'
import { Outlet } from 'react-router-dom'

import FirstNavbar from '../first Navbar/FirstNavbar'
import Footer from '../footer/Footer'
import LastNavbar from '../last Navbar/LastNavbar'
import { useAuth } from '../../Context/AuthContext'

function Layout() {

    let {user} = useAuth();

    return (
       <div>
  {user && (
    <>
      <FirstNavbar />
      <NavBar />
      <LastNavbar />
    </>
  ) }

  <div>
    <Outlet />
  </div>
  {user &&
  <Footer />}
</div>

    )
}

export default Layout
