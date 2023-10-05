import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> Stofficare
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/laundrytag">
                    <BsGrid1X2Fill className='icon'/> Tag Print
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/billing'>
                    <BsFillArchiveFill className='icon'/> Orders
                </Link>
            </li>

            <li className='sidebar-list-item'>
                <Link to='/laundry-billing'>
                    <BsFillGearFill className='icon'/> Billing
                </Link>
            </li>

            <li className='sidebar-list-item'>
                <Link to="/userlocation">
                    <BsFillGrid3X3GapFill className='icon'/> Geo-Location
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/customers'>
                    <BsPeopleFill className='icon'/> Customers
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/products'>
                    <BsListCheck className='icon'/> Products
                </Link>
            </li>
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> abcd
                </a>
            </li> */}
            <li className='sidebar-list-item'>
                <Link to='/setting'>
                    <BsFillGearFill className='icon'/> Setting
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar