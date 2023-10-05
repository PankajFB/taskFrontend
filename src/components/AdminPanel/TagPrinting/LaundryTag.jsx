import React, { useEffect, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

// import './tagprint.css'
import Sidebar from '../Sidebar';

const LaundryTag = () => {
  const printRef = React.useRef();

  const [order,setOrder]=useState([]);
  const tagId=(Math.random()*10000).toFixed();

  // const order=[];

  const fetchOrders= async()=>{
    const response= await fetch('http://localhost:3007/tag-print',{
      method:"GET",
      headers:{
        'content-type':'application/json'
      }
    });
    var data= await response.json();
    setOrder(data);
  }

  useEffect(()=>{
    fetchOrders();
  })

  // useEffect(()=>{
  // fetchOrders();
  // fetchUsers();
  // console.log(order);

  // },[order])

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return <>

    <div style={{position:'absolute'}}>
      <Sidebar/>
    </div>
    <div style={{height:'auto',width:'60%',backgroundColor:'white',marginLeft:'30%',marginTop:'2%',borderRadius:'1vw'}}>
      <div style={{fontSize:'3vw',textAlign:'center',color:'black'}}>TAG PRINT</div>
  {
     order.map(odrs=>{
       return <>
       <div className="laundry-tag" ref={printRef} key={odrs._id} style={{fontWeight:'bolder',marginTop:'2vw'}}>
         <div className="tag-id"> {odrs._id.substr(0,6)}</div>
     
          <div className="customer-name" key={odrs.name} >{odrs.name}</div>
          
    
         <div className="pick-up-date">{odrs.PickUpDate}</div>
         <div className="cloth-type">{odrs.Service}</div>
         <div>----------------------</div>
       </div>
         <button onClick={handlePrint} style={{marginLeft:'41%'}}>Print Laundry Tag</button>
       </>
     })

  }
   </div>
    </>

};

export default LaundryTag;
