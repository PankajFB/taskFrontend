import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';

const Main = () => {

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

  return   <>
  <div className='img_box'>
    <img src="	https://stoffcare.in/static/media/main.fd85733671b16fbf4376.jpg" alt='' srcset="" className='main_image'/>
  </div>
   
 <Link to={`/buildCart/${userId}`} > <button className='schedulepickup'>SCHEDULE A PICKUP</button></Link>

  <div className='main_down'>
    <div className='discbox'>
    <div className='disc'>The Most Convenient Way To Do <span>Laundry  </span>and <span>Dry Cleaning</span>.</div>
    </div>
    <div className='moreinfobox'><p>
    Welcome to the future of laundry
and dry cleaning convenience.
With our seamless, top-tier services,
you can enjoy pristine garments
without the fuss, all tailored to
your schedule and preferences.
        </p></div>
  </div>
  </>
}

export default Main

