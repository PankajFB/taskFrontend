import React from 'react'
import Sidebar from './Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { useMediaQuery } from '../Home/Custom_hooks/custom'
import { useState } from 'react'
import { type } from '@testing-library/user-event/dist/type'



const Addaddress = () => {

    const [selectedOption,setSelectedOption] = useState('home');



    const isMobile=useMediaQuery('(max-width:700px)');

    const [house,sethouse]=useState('');
    const [street,setstreet]=useState('');
    const [landmark,setlandmark]=useState('');
    const [city,setCity]=useState('');
    const [state,setState]=useState('');
    const [postalcode,setpostalcode]=useState('');

    // const [isCompleteAddress,setisCompleteAddress]=useState(false);
    
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


  const saveAddress= async()=>{
    const Address={
        type:selectedOption,
        houseNo:house,
        street:street,
        landmark:landmark,
        city:city,
        state:state,
        postalcode:postalcode

    }
    try {
        const response = await fetch(`http://localhost:3007/add/address`,{
          method:'POST',
          headers:{
            'content-Type':'application/json'
          },
          body:JSON.stringify(Address)
          
        });
        const jsonData = await response.json();
        console.log(jsonData);

        console.log()
      } catch (error) {
        console.error('Error fetching data:', error);
      }

     navigate('/address/settings')
  }
  return <>
    <Sidebar/>
<div className='settingsbox'  >
    <div className='settingshead'> SETTINGS</div>
</div>

<div className='addressbox' style={!isMobile?{height:'64vw',width:'100%',position:'absolute',marginLeft:'0%'}:{height:'150vw',width:'100%',position:'absolute',marginLeft:'0%'}}>
    <div className='address_dialoge' >
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
       <div class="input-container" style={{marginTop:'5%'}}>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input1" required  style={{width:'110%',border:'none',borderBottom:'1px solid #ccc',fontSize:'2vw'}}  onChange={handlehouseChange} />
            <label class="input-label" for="input1" style={isMobile?{fontSize:'2.5vw'}:{}}>House No. / Flat-No. <span style={{color:'red'}}>*</span></label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input2" required style={{width:'110%',border:'none',borderBottom:'1px solid #ccc'}} onChange={handlestreetChange}/>
            <label class="input-label" for="input2" style={isMobile?{fontSize:'2.5vw'}:{}}>Street / Road <span style={{color:'red'}}>*</span></label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input3" required style={{width:'110%',border:'none',borderBottom:'1px solid #ccc'}} onChange={handlelandmarkChange}/>
            <label class="input-label" for="input3" style={isMobile?{fontSize:'2.5vw'}:{}}>Landmark (optional)</label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input4" required style={{width:'110%',border:'none',borderBottom:'1px solid #ccc'}} onChange={handlecityChange} />
            <label class="input-label" for="input4" style={isMobile?{fontSize:'2.5vw'}:{}}>City <span style={{color:'red'}}>*</span></label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input5" required style={{width:'110%',border:'none',borderBottom:'1px solid #ccc'}} onChange={handlestateChange}/>
            <label class="input-label" for="input5" style={isMobile?{fontSize:'2.5vw'}:{}}>State <span style={{color:'red'}}>*</span></label>
        </div>
        <div class="input-wrapper">
            <input type="text" class="text-input" id="input6" required style={{width:'110%',border:'none',borderBottom:'1px solid #ccc'}} onChange={handlepostalChange}/>
            <label class="input-label" for="input6" style={isMobile?{fontSize:'2.5vw'}:{}}>Postal Code <span style={{color:'red'}}>*</span></label>
        </div>
    </div>
      <div style={{display:'flex'}}>
     <Link to='/address/settings'>
      <button className='btn cancelAddress' style={!isMobile?{border:'1px solid red',color:'red'}:{border:'1px solid red',color:'red',height:'9vw'}}>Cancel</button>
     </Link>
      <button className='btn save' onClick={saveAddress} style={!isMobile?{border:'1px solid blue',color:'white',backgroundColor:'blue',marginTop:'2%',marginLeft:'20%'}:{border:'1px solid blue',color:'white',backgroundColor:'blue',height:'9vw'}}>Save</button>

      </div>
    </div>


    </div>
  </>
}

export default Addaddress
