import React from 'react'
import { useState , useEffect } from 'react';
import Sidebar from '../Sidebar';
// import './customers.css'

const Customers = () => {

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
    <div style={{height:'auto',width:'60%',backgroundColor:'white',marginLeft:'30%',marginTop:'2%',borderRadius:'1vw'}}>
      <div style={{fontSize:'3vw',textAlign:'center',color:'black'}}>OUR CUSTOMERS</div>
  {
     customers.map(ct=>{
       return <>
          <div className='customerbox'>
            <div className='namebox'>{ct.name[0]}</div>
            <div className='infobox'>
            <div className='infoname'>Name - {ct.name}</div>
            <div className='infoemail'>Email - {ct.Email}</div>
            </div>
            <div style={{marginLeft:'90%',color:'green',fontSize:'1.5vw',fontWeight:'bolder',marginTop:'-5%'}}>~User</div>
          </div>
       </>
     })

  }
   </div>
  </>
}

export default Customers
