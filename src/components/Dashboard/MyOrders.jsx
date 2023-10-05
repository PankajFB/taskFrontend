import React, { useEffect, useState } from 'react'

import './myorder.css'
import Footer from '../Home/Footer';
import Sidebar from './Sidebar';

import { useMediaQuery } from '../Home/Custom_hooks/custom';

const MyOrders = () => {

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


    const isMobile=useMediaQuery('(max-width:700px)');
    const [myOrders,setMyOrders]=useState([]);
    const [isCancled,setIsCancled]=useState(false);
    const [cancledOrder,setCancledOrder]=useState('');



    useEffect(()=>{
        const fetchOrders= async ()=>{
            const response= await fetch(`http://localhost:3007/placeOrder/${userId}` ,{
                method:"GET",
                headers:{
                    'content-type':'application/json'
                }
            });
            let data= await response.json();
            setMyOrders(data);
            console.log(myOrders);
        }

        fetchOrders();

    })
    
    // useEffect(()=>{
    //    fetchOrders()
    // })
 

     const handleOrderCancelation=(ev)=>{

        setCancledOrder(ev.target.id);
        setIsCancled(true);
     }
  return <>
    <Sidebar/>
    <div className='userbox'>
    <div className='history'>ORDER HISTORY</div>
        {myOrders.map(order=>{
            return <>
             <div key={order._id} className='orderbox'>
             <div>
                
             <table>
        <tbody>
            <tr>
                <td className='td'>Order Id</td>
                <td className='orderdata'>{order._id}</td>
            </tr>
            <tr>
                <td  className='td'>Service</td>
                <td className='orderdata'>{order.Service}</td>
            </tr>
            <tr>
                <td  className='td'>Pick Up Date</td>
                <td className='orderdata'>{order.PickUpDate}</td>
            </tr>
            <tr>
                <td  className='td'>Pick Up Time</td>
                <td className='orderdata'>{order.PickUpTime}</td>
            </tr>
            <tr>
                <td  className='td'>Payment Status</td>
                <td className='orderdata'>{order.PaymentMode?'Pending':'Payment Completed'}</td>
            </tr>
            <tr>
                <td  className='td'>Price</td>
                <td className='orderdata'>{order.price}</td>
            </tr>
            <tr>
                <td>{isCancled && order._id===cancledOrder?
                     ""
                      :<button className='cancel_order' onClick={handleOrderCancelation} id={order._id}>Cancel Order</button>
                    }
                    
                    </td>

                <td className='orderdata'>{order.PaymentMode==='pay later'?<button  className={isCancled && order._id===cancledOrder?'cancel_order':'pending'}>{isCancled && order._id===cancledOrder?'Order Cancelled':'Pending' }</button>:''}</td>
                
            </tr>
        </tbody>
    </table>
             </div>
             </div>
             
            </>
        })}
        <div className='histNavBox'>
            <button className='historyNav'>{'<'}  &nbsp;Prev</button>
            <button  className='historyNav'>Next  &nbsp;{'>'}</button>
        </div>
    </div>
    </>
}

export default MyOrders
