import "rsuite/dist/rsuite.min.css"
import React from 'react'
import { useState } from "react"

import { Link, Outlet } from 'react-router-dom'

import {useModelState,useMediaQuery} from './Custom_hooks/custom'
import { Divider, Drawer } from "rsuite"

// import 'rsuite/dist/styles/rsuite-default.css';

const Navbar = () => {

    const {isOpen,open,close}=useModelState();
    const isMobile=useMediaQuery('(max-width:700px)');

  return <>
       <Drawer open={isOpen} onClose={close} placement="bottom" style={{height:'100%'}}>
       
    <div  style={{backgroundColor:"black",width:'100%',height:"15vw",position:'absolute',boxShadow:'2px 2px 12px gray'}}>
  <div className='company_logo' style={{display:'flex',position:'absolute',marginLeft:'20%'}}>
        <Link to='/' style={{textDecoration:"none",position:'absolute',display:'flex',color:'white'}} className='name'>
       <img src="	https://stoffcare.in/static/media/logo.2296266039d49c97e1f4.png"  alt="StoffCare" className='namedrawer' style={{width:'50vw',height:'15vw',position:'absolute'}}/>
        </Link>
       </div>
    </div>
    
    <Drawer.Body style={{color:'black'}}>
         <br /><br />
        <div><Link  to='/' style={{fontSize:'6vw',color:'black',textDecoration:'none'}}>Home</Link></div>
        <Divider/>
        <div><Link to='/account'  style={{fontSize:'6vw',color:'black',textDecoration:'none'}}>Account</Link></div>
        <Divider/>
        <div><Link  to='/services' style={{fontSize:'6vw',color:'black',textDecoration:'none'}}>Services</Link></div>
        <Divider/>
        <div><Link to='/franchise'  style={{fontSize:'6vw',color:'black',textDecoration:'none'}}>Franchise</Link></div>
        <Divider/>
        <div><Link  to='about' style={{fontSize:'6vw',color:'black',textDecoration:'none'}}>About</Link></div>
        <Divider/>
        <div><Link  to='contactus'  style={{fontSize:'6vw',color:'black',textDecoration:'none'}}>Countact us</Link></div>
        <Divider/>
    </Drawer.Body>
  </Drawer>
   

    <div className='navbar' style={{position:'fixed'}}>
        {
            isMobile?
             ''
            :
       <div className='company_logo'>
        <Link to='/' style={{textDecoration:"none",color:'white'}} className='name'>
       <img src="	https://stoffcare.in/static/media/logo.2296266039d49c97e1f4.png"  alt="StoffCare" className='name'/>
        </Link>
       </div>

        }
       {isMobile?
       <>
       <div className='linksResp'>
        <div className='user'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:'#ffffff',scale:'1.7'}}><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></div>
        <button onClick={open}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:'blue' ,scale:'1.5',marginTop:'0%'}}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button>
       </div>
       </>
       : 
       <div className='links'>
      <div style={{marginLeft:'3%'}}>
        <Link to='/' style={{textDecoration:'none',color:'white'}}>Home</Link>
      </div>
      <div  style={{marginLeft:'3%'}} >
      <Link to='/services' style={{textDecoration:'none',color:'white'}}>Services</Link>
      </div>
      <div  style={{marginLeft:'3%'}}>
      <Link to='/about' style={{textDecoration:'none',color:'white',marginLeft:'3%'}}>About</Link>
      </div>
      <div  style={{marginLeft:'3%'}}>
      <Link to='/contact' style={{textDecoration:'none',color:'white',marginLeft:'3%'}}>Contact</Link>
      </div>
      <button  className='login'>
      <Link to='/login' style={{textDecoration:'none',color:'white'}}>LOGIN</Link>
      </button>
      <button className='franchise'>
      <Link to='/franchise' style={{textDecoration:'none',color:'white'}} >FRANCHISE</Link>
      </button>
      </div>
       
       }
    </div>
    <Outlet/>
  </>
}

export default Navbar
