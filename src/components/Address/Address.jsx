// import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import ProgressBar from '../SchedulePickup/Progressbar'
import './address.css'

import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Home/Footer'
import { Alert } from 'rsuite'
import GoogleMaps from './GoogleMap'


const Address = () => {
  
const [step,setStep]=useState([]);

const navigate=useNavigate();

const type =localStorage.getItem('type');
const house =localStorage.getItem('houseNo');
const street =localStorage.getItem('street');
const landmark =localStorage.getItem('landmark');
const city =localStorage.getItem('city');
const state =localStorage.getItem('state');
const postalcode =localStorage.getItem('postalcode');

const [userId,setUserId]=useState('');
 
const fetchUser=async()=>{
  const response= await fetch('http://localhost:3007/login');
  var data= await response.json();
  setUserId(data[0].userId);
  console.log("userId",userId);

}
   fetchUser();

const [isAddressAdded,setisAddreddAdded]=useState(false);




const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);


  // const ManualAddress=JSON.parse(localStorage.getItem('manualAddress'))

  // const pickupAddress=`
  // ${ManualAddress.type},


  // ${ManualAddress.houseNo},


  // ${ManualAddress.street},


  // ${ManualAddress.city},


  // ${ManualAddress.state},


  // ${ManualAddress.postalcode}
  // `

  const pickupAddress='';
  
      const ManualAddress=JSON.parse(localStorage.getItem('manualAddress'))
  
    // const pickupAddress=`
    // ${ManualAddress.type},
  
  
    // ${ManualAddress.houseNo},
  
  
    // ${ManualAddress.street},
  
  
    // ${ManualAddress.city},
  
  
    // ${ManualAddress.state},
  
  
    // ${ManualAddress.postalcode}
    // `
    // }
  
    
    const handleNextStep = () => {

        if(isAddressAdded){
          localStorage.setItem('isAddressAdded',isAddressAdded);
           navigate(`/order/confirm/${userId}`)
        }
        else{
          // Notification.error('Please select a pickup address',1000);
        }
      };
    
      const handlePrevStep = () => {
        
      };
    
      const handleisAddressAdded=()=>{
        setisAddreddAdded(true);

      }
      
      const getCurrentLocation=()=>{
        if(localStorage.getItem('isManualAddress')){
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
              },
              (error) => {
                setError(error.message);
              }
            );
          } else {
            setError("Geolocation is not available in your browser.");
          }
          localStorage.removeItem('manualAddress');
          localStorage.removeItem('isManualAddress')
          localStorage.setItem('Address',JSON.stringify(location))
          localStorage.setItem('useCurrentLoaction',true);
          setisAddreddAdded(true);
        }
        else{
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
              },
              (error) => {
                setError(error.message);
              }
            );
          } else {
            setError("Geolocation is not available in your browser.");
          }
          localStorage.setItem('Address',JSON.stringify(location))
          localStorage.setItem('useCurrentLoaction',true);
          setisAddreddAdded(true);
          
        }
      }
      
  return<>
    

      <ProgressBar />

      <div className='addressbox'>
        <div className='address_head'>Select Pickup Address</div>

        {localStorage.getItem('isManualAddress')?
        <div className='address'>
          <>
          {localStorage.getItem('isManualAddress')?
            `
            ${ManualAddress.type},
          
          
            ${ManualAddress.houseNo},
          
          
            ${ManualAddress.street},
          
          
            ${ManualAddress.city},
          
          
            ${ManualAddress.state},
          
          
            ${ManualAddress.postalcode}
            `
          :''}
          </>  
        </div>
          :''}
          {
            localStorage.getItem('isManualAddress')?
            <input type="radio" className='saveAddressbtn' checked={isAddressAdded===true}  onChange={handleisAddressAdded}/>
            :''
          }
        <Link to={`/address/dialoge/${userId}`} style={{textDecoration:'none'}}>
        <div className='selectaddress'>
           ADD NEW ADDRESS
        </div>
        </Link>
        <div className='getCurrentLocation' onClick={getCurrentLocation} onMouseEnter={getCurrentLocation}>
           Use Current Location
        </div>
        {/* <GoogleMaps/> */}
      </div>

      <div className='navbtn'>
        <Link to={`/schedulepickup/${userId}`}>
      <button onClick={handlePrevStep} className='prevbtn'>Previous</button>

        </Link>
      <button onClick={handleNextStep} className='nextbtn'>Next</button>
      </div>

      <Footer/>
  </>
}

export default Address
