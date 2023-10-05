import React, { useState } from 'react';
import './pickup.css'; 

function ProgressBar() {
  // const [step, setStep] = useState(0);

  // const handleStepClick = (stepNumber) => {
  //   setStep(stepNumber);
  // };
const count=[1,2,3];
  const [completedSteps, setCompletedSteps] = useState(0);

  const steps = [
    { name: 'Build your cart', completed: completedSteps >= 1 },
    { name: 'Schedule a Pickup', completed: completedSteps >= 2 },
    { name: 'Select Address', completed: completedSteps >= 3 },
    { name: 'Confirm', completed: completedSteps >= 4 },
  ];



  return (
    <>
    {/* <div  style={{display:'flex'}}  className="progress-bar" >
      {[1, 2, 3, 4].map((stepNumber) => (
        <>
        <div>
        <span
          key={stepNumber}
          className={`step ${step >= stepNumber ? 'completed' : ''}`}
           style={stepNumber===1 && localStorage.getItem('isServiceAdded')?{backgroundColor:'green',color:'white'}
           :(localStorage.getItem('PickUpDate') && stepNumber===2)?{backgroundColor:'green',color:'white'}
           :(localStorage.getItem('isAddressAdded') && stepNumber===3)?{backgroundColor:'green',color:'white'}:{backgroundColor:'white',color:'black'}
        }
           
          onClick={() => handleStepClick(stepNumber)}
        >
          {stepNumber}
        </span>

        </div>

        {
            stepNumber<4?
            <div className={`line ${step >={stepNumber} ? 'completed' : ''}`} />
            
            :''
        }
        </>
      ))}
      
      </div>
      <div className='progressname'>
      <div className='step1'>Build your Order</div>
      <div className='step2'>Schedule Pickup</div>
      <div className='step3'>Select Address</div>
      <div className='step4'>Confirm</div>
      </div> */}
    

    <div className="progress-container" style={{marginTop:'2%'}}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${step.completed ? 'completed' : ''}`}
        >
          <div 
           
           style={index===0 && localStorage.getItem('isServiceAdded')?{backgroundColor:'green',color:'white'}
           :(localStorage.getItem('PickUpDate') && index===1)?{backgroundColor:'green',color:'white'}
           :(localStorage.getItem('isAddressAdded') && index===2)?{backgroundColor:'green',color:'white'}:{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundcolor:" #ccc",
            color: "#fff",
            display: "flex",
            justifycontent: "center",
            alignitems: "center",
            fontsize: "18px",
            fontweight: "bold",
            border: "2px solid transparent"

           }
        }
        
        
            className={index===3?'circle4 circle':'circle'}
          >
            {step.completed ? <span>&#10003;</span> : index + 1}
          </div>
          {index<3?
           <div className='line'></div>
           :''
        }
          
         
          <div  className={index===3?'step4':"step-name"}>{step.name}</div>
        </div>
      ))}
    </div>
    </>
     

  );
}

export default ProgressBar;


