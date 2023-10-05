import React from 'react'
import Main from './Main'

import { Outlet } from 'react-router'

import Services from './Services'
import Chooseus from './Chooseus'
import Downloadapp from './Downloadapp'
import Footer from './Footer'

import LaundryTag from '../AdminPanel/TagPrinting/LaundryTag'

const Home = () => {
  return <>
 <Main/>
 <Services/>
 <Chooseus/>
 <Downloadapp/>
 <Footer/>
     <Outlet/>
   
  </>
}

export default Home
