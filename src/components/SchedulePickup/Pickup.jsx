import React from 'react'

import  { useState,useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import ProgressBar from './Progressbar';

function Pickup() {

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


    const [dates, setDates] = useState([]);
  const [step, setStep] = useState(1);
const [pickipDate,setpickupdate]=useState("");
const [pickuptime,setpickuptime]=useState("");

const navigate=useNavigate();

const [next,setNext]=useState(false)
   
  const timeArr=['9 AM - 10 AM','10 AM - 11 AM','11 AM - 1 PM','1 PM - 3 PM','3 PM - 5PM','5 PM - 7 PM','7 PM - 8 PM','8 PM - 9 PM']


  const handleNextStep = () => {
    
    if((pickipDate && pickuptime) ||  (localStorage.getItem('PickUpDate') && localStorage.getItem('PickUpTime'))){
     
            localStorage.setItem('PickUpDate',pickipDate);
            localStorage.setItem('PickUpTime',pickuptime);
        navigate(`/pickaddress/${userId}`)
    }
    else{
      
  
    }
  };

  const handlePrevStep = () => {
    
  };

  

  useEffect(() => {
  
    const currentDate = new Date();

    const next7Dates = [];
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      next7Dates.push(nextDate);
    }

       
    const formattedDates = next7Dates.map(date => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    });

    console.log(formattedDates)

    setDates(formattedDates);
  }, []);

  const selectdate=(ev)=>{
    if(localStorage.getItem('PickUpDate')){
        localStorage.removeItem('PickUpDate');
    }
      setpickupdate(ev.target.id);
    console.log(pickipDate);
       
  }

  const selecttime=(ev)=>{

    if(localStorage.getItem('PickUpTime')){
        localStorage.removeItem('PickUpTime');
    }

    setpickuptime(ev.target.id);
    console.log(pickuptime);
       
  }

  return (
    <div className="App">
      <ProgressBar />

      <div className='datebox'>
        <div className='datehead'>Select Pick-up Date </div>
      <ul className='dates'>
        {dates.map((date, index) => (
          <li key={index} onClick={selectdate}   >
            <div className='li' id={date}  style={date===pickipDate || localStorage.getItem('PickUpDate')===date?{backgroundColor:'blue',color:'white'}:{backgroundColor:'white',color:'black'}}>
            {date}
            </div>
            </li>
        ))}
      </ul>

      </div>

      <div className='timebox'>
        <div className='timehead'>Select Pick-up  Time</div>
        <div>
        <ul className='times'>
        {timeArr.map((time, index) => (
          <li key={index} onClick={selecttime}  >
            <div className='litimes' id={time}  style={time===pickuptime || localStorage.getItem('PickUpTime')===time?{backgroundColor:'blue',color:'white'}:{backgroundColor:'white',color:'black'}}>
            {time}
            </div>
            </li>
        ))}
      </ul>
        </div>
      </div>
          {/* {next?'':<div>Please select pickup date and time...</div>} */}
      <div className='navbtn'>
        <Link to={`/buildCart/${userId}`}>
      <button onClick={handlePrevStep} className='prevbtn'>Previous</button>

        </Link>
      {/* <Link to='/pickaddress'> */}
      <button onClick={handleNextStep} className='nextbtn'>Next</button>
      {/* </Link> */}
      </div>
    </div>
  );
}


export default Pickup
