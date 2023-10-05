import React from 'react'
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer';
import ProgressBar from '../SchedulePickup/Progressbar';
import { Alert } from 'rsuite';
import { useMediaQuery } from '../Home/Custom_hooks/custom';


const Addressdialoge = () => {

  const [userId,setUserId]=useState('');
 
const fetchUser=async()=>{
  const response= await fetch('http://localhost:3007/login');
  var data= await response.json();
  setUserId(data[0].userId);
  console.log("userId",userId);

}
   fetchUser();

    const [selectedOption,setSelectedOption] = useState('home');

    const isMobile=useMediaQuery('(max-width:700px)');

    const [house,sethouse]=useState('');
    const [street,setstreet]=useState('');
    const [landmark,setlandmark]=useState('');
    const [city,setCity]=useState('');
    const [state,setState]=useState('');
    const [postalcode,setpostalcode]=useState('');

    // const [isCompleteAddress,setisCompleteAddress]=useState(false);

    const Address={};
    
    const navigate=useNavigate();
     
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handlehouseChange = (event) => {
    sethouse(event.target.value);
  };
  const handlestreetChange = (event) => {
    setstreet(event.target.value);
  };
  const handlelandmarkChange = (event) => {
    setlandmark(event.target.value);
  };
  const handlecityChange = (event) => {
    setCity(event.target.value);
  };
  const handlestateChange = (event) => {
    setState(event.target.value);
  };
  const handlepostalChange = (event) => {
    setpostalcode(event.target.value);
  };

  const handleNextNavigation=()=>{
    // if(house && street && city && state && postalcode && selectedOption){
    //     navigate('/confirm');
    // }
    // else{
    //     Alert.error('Please fill out all the necessary fields.')
    // }
    if(localStorage.getItem('isAddressAdded')){
        navigate('/confirm');
    }
    else{

        // Notification.error('Please selsect a pickup address.')
    }
  }

  const saveAddress=()=>{
    if(house && street && city && state && postalcode && selectedOption){
        // setisCompleteAddress(true);
    //   localStorage.setItem('type',selectedOption)
    //     localStorage.setItem('houseNo',house);
    //     localStorage.setItem('street',street);
    //     localStorage.setItem('landmark',landmark);
    //     localStorage.setItem('city',city);
    //     localStorage.setItem('state',state);
    //     localStorage.setItem('postalcode',postalcode);

    Address.type=selectedOption;
    Address.houseNo=house;
    Address.street=street;
    if(landmark){
        Address.landmark=landmark;
    }
    Address.city=city;
    Address.state=state;
    Address.postalcode=postalcode;
    localStorage.setItem('manualAddress',JSON.stringify(Address));
    localStorage.removeItem('currentLocation');
    localStorage.removeItem('useCurrentLocation')
        localStorage.setItem('isManualAddress',true);
        navigate(`/pickaddress/${userId}`);
    }
    else{
      // Notification.error('Please fill out all the necessary fields.')
    }

  }
  return <>
  <ProgressBar/>
      <div className='address_dialoge'>
        <div className='dialogetop'>
            Select Address
        </div>
        <div className='radiohead'>
            Type<span style={{color:'red'}}>*</span>
        </div>
      <div className="radio-group">
        <label className='radiolabel'>
          <input
            type="radio"
            name="options"
            value="home"
            checked={selectedOption === 'home'}
            onChange={handleOptionChange}
          />
          Home
        </label>

        <label className='radiolabel'>
          <input
            type="radio"
            name="options"
            value="office"
            checked={selectedOption === 'office'}
            onChange={handleOptionChange}
          />
          Office
        </label>

        <label className='radiolabel'>
          <input
            type="radio"
            name="options"
            value="hotel"
            checked={selectedOption === 'hotel'}
            onChange={handleOptionChange}
          />
          Hotel
        </label>

        <label className='radiolabel'>
          <input
            type="radio"
            name="options"
            value="others"
            checked={selectedOption === 'others'}
            onChange={handleOptionChange}
          />
          Others
        </label>
      </div>

      {/* <div className='address_input'>
      <div class="input-container">
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input1" value={house} required onChange={handlehouseChange} />
            <label class="input-label" for="input1">House No. / Flat-No. <span style={{color:'red'}}>*</span></label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input2" value={street} required onChange={handlestreetChange}/>
            <label class="input-label" for="input2">Street / Road <span style={{color:'red'}}>*</span></label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input3" value={landmark} required onChange={handlelandmarkChange}/>
            <label class="input-label" for="input3">Landmark (optional)</label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input4" value={city} required onChange={handlecityChange} />
            <label class="input-label" for="input4">City <span style={{color:'red'}}>*</span></label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input5" value={state} required  onChange={handlestateChange}/>
            <label class="input-label" for="input5">State <span style={{color:'red'}}>*</span></label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input6" value={postalcode} required onChange={handlepostalChange} />
            <label class="input-label" for="input6">Postal Code <span style={{color:'red'}}>*</span></label>
        </div>
    </div>

      </div> */}
       <div class="input-container" style={{marginTop:'5%'}}>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input1" required style={!isMobile?{width:'110%',border:'none',borderBottom:'1px solid #ccc',fontSize:'2vw'}:{width:'110%',border:'none',borderBottom:'1px solid #ccc',fontSize:'4vw'}}  onChange={handlehouseChange} />
            <label class="input-label" for="input1" style={isMobile?{fontSize:'2.5vw',marginTop:'6%'}:{}}>House No. / Flat-No. <span style={{color:'red'}}>*</span></label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input2" required  style={!isMobile?{width:'110%',border:'none',borderBottom:'1px solid #ccc',fontSize:'2vw'}:{width:'110%',border:'none',borderBottom:'1px solid #ccc',fontSize:'4vw'}}  onChange={handlestreetChange}/>
            <label class="input-label" for="input2" style={isMobile?{fontSize:'2.5vw',marginTop:'6%'}:{}}>Street / Road <span style={{color:'red'}}>*</span></label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input3" required style={!isMobile?{width:'110%',border:'none',borderBottom:'1px solid #ccc',fontSize:'2vw'}:{width:'110%',border:'none',borderBottom:'1px solid #ccc',fontSize:'4vw'}} onChange={handlelandmarkChange}/>
            <label class="input-label" for="input3" style={isMobile?{fontSize:'2.5vw',marginTop:'6%'}:{}}>Landmark (optional)</label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input4" required  style={!isMobile?{width:'110%',border:'none',borderBottom:'1px solid #ccc',fontSize:'2vw'}:{width:'110%',border:'none',borderBottom:'1px solid #ccc',fontSize:'4vw'}}onChange={handlecityChange} />
            <label class="input-label" for="input4" style={isMobile?{fontSize:'2.5vw',marginTop:'6%'}:{}}>City <span style={{color:'red'}}>*</span></label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input5" required  style={!isMobile?{width:'110%',border:'none',borderBottom:'1px solid #ccc',fontSize:'2vw'}:{width:'110%',border:'none',borderBottom:'1px solid #ccc',fontSize:'4vw'}} onChange={handlestateChange}/>
            <label class="input-label" for="input5" style={isMobile?{fontSize:'2.5vw',marginTop:'6%'}:{}}>State <span style={{color:'red'}}>*</span></label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input6" required  style={!isMobile?{width:'110%',border:'none',borderBottom:'1px solid #ccc',fontSize:'2vw'}:{width:'110%',border:'none',borderBottom:'1px solid #ccc',fontSize:'4vw'}} onChange={handlepostalChange}/>
            <label class="input-label" for="input6" style={isMobile?{fontSize:'2.5vw',marginTop:'6%'}:{}}>Postal Code <span style={{color:'red'}}>*</span></label>
        </div>
    </div>

     <Link to={`/pickaddress/${userId}`}>
      <button className='btn cancelAddress' style={{border:'1px solid red',color:'red',borderRadius:'.4vw'}}>Cancel</button>
     </Link>
      <button className='btn save' onClick={saveAddress} style={{border:'1px solid blue',color:'white',borderRadius:'.4vw',backgroundColor:'blue'}}>Save</button>
    </div>

    <div className='navbtn'>
        <Link to={`/pickaddress/${userId}`}>
      <button  className='prevbtn'>Previous</button>
        </Link>
     
      <button className='nextbtn' onClick={handleNextNavigation}>Next</button>
      
      </div>

      <Footer/>


  </>
}

export default Addressdialoge;
