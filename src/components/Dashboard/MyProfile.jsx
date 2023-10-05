import React from 'react'
import Sidebar from './Sidebar'
import Footer from '../Home/Footer'
import { useMediaQuery } from '../Home/Custom_hooks/custom'

import { useState,useEffect } from 'react';

const MyProfile = () => {
  
    const [matched,setMatched]=useState(false);

    const [userId,setUserId]=useState('');
    const [name,setName]=useState('');
    const [email,setemail]=useState('');
  
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
    const data= await response.json();
    setUserId(data[0].userId);
    setName(data[0].name);
        setemail(data[0].Email);
    console.log("userId",userId);
  
  }
  if(matched===true)
     fetchUser();

    //  const getuser= async()=>{
    //     const response= await fetch(`http://localhost:3007/getuser/${userId}`);
    //     var data= await response.json();
    //     setName(data.name);
    //     setemail(data.Email);
    //  }

    //  useEffect(()=>{
    //       if(matched===true){
    //         getuser();
    //       }
       
    //  },[])





    const isMobile=useMediaQuery('(max-width:700px)');
  return <>
    <Sidebar/>
    <div className='profilebox'>
        <div className='settingshead'>My Profile</div>
        <div className='avatar'>{name[0]}</div>
        <div className='user_info'>
           <div>
           <div class="input-container">
        <label class="input-label" for="myInput" style={!isMobile?{marginTop:'4%',marginLeft:'-1%'}:{marginTop:'1%',marginLeft:'2%',fontSize:'1.5vw'}}>Name</label>
        <input type="text" class="text-input" id="myInput"  defaultValue={name}/>
    </div>

    <div class="input-container">
        <label class="input-label" for="myInput" style={!isMobile?{marginTop:'4%',marginLeft:'-1%'}:{marginTop:'1%',marginLeft:'2%',fontSize:'1.5vw'}}>Email</label>
        <input type="text" class="text-input" id="myInput"  defaultValue={email}/>
    </div>
    <div class="input-container">
        <label class="input-label" for="myInput" style={!isMobile?{marginTop:'4%',marginLeft:'-1%'}:{marginTop:'1%',marginLeft:'2%',fontSize:'1.5vw'}} >Phone</label>
        <input type="text" class="text-input" id="myInput" defaultValue='Please add your number'/>
    </div> 
           </div>
        </div>

    </div>
    <br/>
    <div style={isMobile?{marginTop:'140%',width:'100%',height:'76vw',boxShadow:'2px 2px 12px gray'}:{marginTop:'65%'}}>
    <Footer/>
    </div>
  </>
}

export default MyProfile
