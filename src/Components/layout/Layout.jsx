import React from 'react'
import NavBar from '../main Navbar/NavBar'
import { Outlet } from 'react-router-dom'

import FirstNavbar from '../first Navbar/FirstNavbar'
import Footer from '../footer/Footer'
import LastNavbar from '../last Navbar/LastNavbar'

function Layout() {
    return (
        <div>
            <FirstNavbar/>
            <NavBar/>
            <LastNavbar/>
            <div className="container">
                <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
