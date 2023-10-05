import React from 'react'

import Sidebar from './Sidebar'

import { Link } from 'react-router-dom'

const Addresssettings = () => {
  return<>
    <Sidebar/>

<div className='settingsbox'>
    <div className='settingshead'> SETTINGS</div>
     <div className='addresses'></div>
     <div>
     <Link to="/address/dialogue" style={{textDecoration:'none'}}>
        <div className='addressSettings'>
           Add Address
        </div>
       </Link>
     </div>
</div>
  </>
}

export default Addresssettings
