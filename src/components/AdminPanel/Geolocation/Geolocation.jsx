import React from 'react'

import Sidebar from '../Sidebar'
import { useState,useEffect } from 'react';
import GoogleMaps from '../../Address/GoogleMap';


const Geolocation = () => {

    const [customers,setcustomers]=useState([]);

    const fetchCustomers= async ()=>{
        const response= await fetch(`http://localhost:3007/getCustomers` ,{
            method:"GET",
            headers:{
                'content-type':'application/json'
            }
        });
        let data= await response.json();
        setcustomers(data);

    }
    useEffect(()=>{
       fetchCustomers()
    })
  return <>
    <div style={{position:'absolute'}}>
      <Sidebar/>
    </div>
    <div style={{height:'10vw',width:'80%',backgroundColor:'white',marginLeft:'18%',marginTop:'2%',borderRadius:'1vw'}}>
      <div style={{fontSize:'3vw',textAlign:'center',color:'black'}}>USER GEOLOCATION</div>
      {
     customers.map(ct=>{
       return <>
          <div className='customerbox' style={{marginTop:'10%'}}>
            <div className='infobox'>
            <div className='infoname'>Name - {ct.name}</div>
            <div className='infoemail'>Email - {ct.Email}</div>
            </div>
            <GoogleMaps/>
          </div>
       </>
     })

  }
   </div>
  </>
}

export default Geolocation
