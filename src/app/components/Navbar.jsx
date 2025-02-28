import React from 'react'
import { sideNavMain, sideNavOther } from '../dashboardData'
import '../CSS/Navbar.css'

function Navbar() {
  return (
    <nav className='sideNav'>
       <h1 className='logo' >WeHR</h1>
        <aside>
            <div className='nav-section' >
                <h3 className='main' >MAIN MENU</h3>
                {
                    sideNavMain.map((item) => (
                        <div key={item.id} className='nav-btns'>
                            {item.icon}
                            <a href={item.link}>{item.title}</a>
                        </div>
                    ))
                }
            </div>
            <div className='nav-section' >
                <h3 className='other' >OTHERS</h3>
                {
                    sideNavOther.map((item) => (
                        <div key={item.id} className='nav-btns'>
                            {item.icon}
                            <a href={item.link}>{item.title}</a>
                        </div>
                    ))
                }
            </div>
        </aside>
    </nav>
  )
}

export default Navbar
