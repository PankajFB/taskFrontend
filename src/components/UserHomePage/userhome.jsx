import React from 'react'
import Mainbar from './Mainbar'
import Main from './Main'
import Services from '../Home/Services'
import Chooseus from '../Home/Chooseus'
import Downloadapp from '../Home/Downloadapp'
import { Footer } from 'rsuite'

import '../../App.css'

const Userhome = () => {
  return <>
    <Mainbar/>
    <Main/>
    <Services/>
    <Chooseus/>
    <Downloadapp/>
    <Footer/>
  </>
}

export default Userhome
