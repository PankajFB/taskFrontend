import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

import { useMediaQuery } from '../Home/Custom_hooks/custom'

import Footer from '../Home/Footer'

const Settings = () => {

    const isMobile=useMediaQuery('(max-width:700px)');
  return <>
    <Sidebar/>

    <div className='settingsbox' style={{position:'absolute'}}>
        <div className='settingshead'> SETTINGS</div>
       <Link to="/address/settings" style={{textDecoration:'none'}}>
        <div className='addressSettings'>
           Address Setting
        </div>
       </Link>
    </div>
  </>
}

export default Settings
