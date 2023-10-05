import React, { useState, useEffect ,useRef} from 'react';
import Sidebar from '../Sidebar';

import { useReactToPrint } from 'react-to-print';

function LaundryBill() {
    const [allOrders,setAllOrders]=useState([]);
  const [order, setOrder] = useState([]);
  const [orderId, setOrderId] = useState('');
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const fetchOrders=async()=>{
    try {
        const response = await fetch(`http://localhost:3007/order-billing`);
        const data = await response.json();
        setAllOrders(data); 
      }
      
      catch (error) {
        console.error('Error fetching order details:', error);
      }

  }


//   const fetchOrderDetails = async (odrId) => {

//     console.log(odrId);
//      setOrderId(odrId);
       
//     try {
//       const response = await fetch(`http://localhost:3007/laundary-billing/${odrId}`,{
//         method:'GET',
//         headers:{
//             'content-type':'application/json'
//         }
//       });
//       const data = await response.json();
//       setOrder(data); 
//     } 
//     catch (error) {
//       console.error('Error fetching order details:', error);
//     }
//   };

  useEffect(() => {
        fetchOrders();
  }, []);



//   const printBill = () => {
//     window.print();
//   };

  return <>
     <div style={{position:'absolute'}}>
      <Sidebar/>
    </div>
    <div className="bill" style={{height:'auto',width:'70%',backgroundColor:'white',marginTop:'3%',marginLeft:'22%',borderRadius:'1vw'}}>
      <h2 style={{color:'black',textAlign:'center',marginBottom:'7%'}}>LAUNDRY BILLING</h2>

      {
        allOrders.map((order)=>{
        return <>
        <div key={order._id} style={{height:'25vw',width:'50%',boxShadow:'2px 2px 10px gray',marginLeft:'25%',borderRadius:"1vw"}}>
        <div style={{color:'black',display:'flex',textAlign:'center',alignItems:'center',justifyContent:'center',fontSize:'2vw',marginBottom:'2%'}}>ORDER BILL</div>
        <div ref={componentRef} style={{color:'black',marginLeft:'20%'}}>
          <p><strong>Order ID:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{order._id}</p>
          <p><strong>Pick-up Date:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {order.PickUpDate}</p>
          <p><strong>Pick-up Time:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {order.PickUpTime}</p>
          <p><strong>Services:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{order.Service}</p>
          <p><strong>Price:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs. {order.price}</p>

        </div>
        <button onClick={handlePrint} style={{width:'90%',display:'flex',textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:'5%',borderRadius:'.7vw'}}>PRINT BILL</button>
      </div> 
        </>

        })
    //     allOrders.map(odrs=>{
    //   return  <div key={odrs._id} style={{marginLeft:'15%',width:'70%',boxShadow:'2px 2px 10px gray',borderRadius:'1vw'}}>
    //     <div style={{color:'black',marginLeft:'4%',marginTop:'4%'}}>
    //     <div>Order Id : {odrs._id}</div>
    //     <div>Name : {odrs.name}</div>
    //     </div>
    //     <button onClick={()=>fetchOrderDetails(odrs._id)} style={{marginLeft:'40%',width:'50%',display:'flex',textAlign:'center',alignItems:'center',justifyContent:'center',marginBottom:'2%'}}>Print Bill</button>
    //   </div>
    //     })
    //   }
    //   {order.map(order=>{
    //   return  <>
    //     <div key={order._id}>
    //       <strong>Address:</strong> {order.address}
    //     </div>
    //     <div>
    //       <strong>Pickup Date:</strong> {order.pickupDate}
    //     </div>
    //     <div>
    //       <strong>Pickup Time:</strong> {order.pickupTime}
    //     </div>
    //     <div>
    //       <strong>Services:</strong>
    //       <ul>
    //         {order.services.map((service) => (
    //           <li key={service.id}>
    //             {service.name}: ${service.price.toFixed(2)}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div>
    //       <strong>Total Price:</strong> Rs. {order.price}
    //     </div>
    //     <button onClick={printBill}>Print Bill</button>
    //     </>
        
    //   })
        }
    </div>
    </>;
}

export default LaundryBill;


