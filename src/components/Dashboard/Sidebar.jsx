import React from 'react'

import './myorder.css'
import { Link, useNavigate} from 'react-router-dom'
import { useMediaQuery } from '../Home/Custom_hooks/custom';


import { useState,useEffect } from 'react';

const Sidebar = () => {

    const navigate=useNavigate();
 
    const [matched,setMatched]=useState(false);

    const [userId,setUserId]=useState('');
  
    const redirect=async()=>{
     
      const response= await fetch('http://localhost:3007/matched') 
      const data=await response.json();
        setMatched(data.matched);
  }
  
  useEffect(()=>{
  redirect();
  })
  
  
   
  const fetchUser=async()=>{
    const response= await fetch('http://localhost:3007/login');
    var data= await response.json();
    setUserId(data[0].userId);
    console.log("userId",userId);
  
  }
  if(matched===true)
     fetchUser();

    const isMobile=useMediaQuery('(max-width:700px)');

    const handleLogout=()=>{
              navigate('/');

            fetch(`http://localhost:3007/logout/${userId}`,
            {
                method:'POST',
                headers:{
                    'content-type':'application/json'
                }
            }
            )
            .then(response=>{
               console.log(response.json());
            })
    }
  return <>
   <div className='user_sidebar'>
         <Link to={`/myProfile/${userId}`} style={{textDecoration:'none'}}>
        <div className='userlinks'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"  style={isMobile?{scale:'5',marginTop:'30%',marginLeft:'20%'}:{scale:'1.3'}}><path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/></svg>&nbsp;&nbsp;{isMobile?"":' My Profile'}</div>
         </Link>
         <Link to={`/mySettings/${userId}`} style={{textDecoration:'none'}}>
        <div className='userlinks'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={isMobile?{scale:'5',marginTop:'60%',marginLeft:'20%'}:{scale:'1.3'}}><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>  &nbsp;&nbsp;{isMobile?"":'Settings'}</div>
         </Link>
         <Link to={`/myorders/${userId}`}  style={{textDecoration:'none'}}>
        <div className='userlinks'> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={isMobile?{scale:'5',marginTop:'90%',marginLeft:'20%'}:{scale:'1.3'}}><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>  &nbsp;&nbsp;{isMobile?"":'Order History'}</div>
         </Link>

        <div>

        </div>
         
        <div className='userlinks' style={{cursor:'pointer'}} onClick={handleLogout}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={isMobile?{scale:'5',marginTop:'120%',marginLeft:'20%'}:{scale:'1.3'}}><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>  &nbsp;&nbsp;{isMobile?"":'Logout'}</div>

    </div>
  </>
}

export default Sidebar
