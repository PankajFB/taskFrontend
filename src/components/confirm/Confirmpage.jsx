import React, { useEffect } from 'react'
import ProgressBar from '../SchedulePickup/Progressbar'
import { useState } from 'react'
import { Alert, Button,Notification, Placeholder} from 'rsuite'

import Footer from '../Home/Footer';

import './confirm.css'
import { Link, json, useNavigate } from 'react-router-dom';

import Razorpay from 'react-razorpay';


const Confirmpage = () => {

  const [userid,setUserId]=useState('');

  const [Username,setUsername]=useState('');
 
   const [matched,setMatched]=useState();
  
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
  setUsername(data[0].name);
  console.log("userId",userid);

}
if(matched===true)
   fetchUser();


    const [paymenttype,setpaymenttype]=useState('PayNow');
    const navigate=useNavigate();
    const [orderData,setOrderData]=useState();

    const [cupon,setCupon]=useState('');
    const [discount,setDiscount]=useState();
    const [isCuponApplied,setisCuponApplied]=useState(false);
    const [price,setprice]=useState();
    const [servtype,setservice]=useState('');

    const cupons=[{code:'kfifj3rf',discount:5},{code:'jdbf3few',discount:8},{code:'kjshde4e',discount:10},{code:'jh34ser1',discount:15}];
    
    const ManualAddress=JSON.parse(localStorage.getItem('manualAddress'))
    
    const service=JSON.parse(localStorage.getItem('orderDetails'));

    const handlepayment=(ev)=>{
        setpaymenttype(ev.target.value);
    }

    useEffect(()=>{
      if(localStorage.getItem('isbyWeight')){
        service.map(serv=>{
          return  setservice(serv.service);
        })
      }
      else{
       return setservice(service.services);
      }
    },[service,servtype,service.services])

    useEffect(()=>{
      if(localStorage.getItem('isbyWeight')){
        service.map(serv=>{
            if(isCuponApplied){
              console.log(price);
             return setprice((serv.weight*100 - serv.weight*100*discount/100));
            }
            else{
              console.log(price);
             return setprice(serv.weight*100);
            }
        }) 
      }
      else{
        if(isCuponApplied){
          console.log(price);
         return setprice((service.price - service.price*discount/100));
        }
        else{
          console.log(price);
         return setprice(service.price);
        }
      }
},[discount,price,isCuponApplied,service])

// useEffect(()=>{
//   if(localStorage.getItem('isbyCloth')){
//     setservice(service.services);
//   }
// },[service.services])

// useEffect(()=>{
//   if(localStorage.getItem('isbyWeight')){
//         if(isCuponApplied){
//           setprice((service.price - service.price*discount/100));
//           console.log(price);
//         }
//         else{
//           setprice(service.price);
//           console.log(price);
//         }
//   }
// },[discount,service,isCuponApplied,service.services,price])

    const handleOrderCancelation=()=>{
      localStorage.removeItem('isServiceAdded');
      localStorage.removeItem('orderDetails');
        localStorage.removeItem('PickUpTime');
        localStorage.removeItem('PickUpDate');
        localStorage.removeItem('isAddressAdded');
        localStorage.removeItem('useCurrentLoaction');
        localStorage.removeItem('currentLocation');

        navigate(`/buildCart/${userid}`);    
    }



    const handlePayNow= async()=>{
        // try {
        //     const response = await fetch(`http://localhost:3007/placeOrder`,{
        //       method:'POST',
        //       headers:{
        //         'content-Type':'application/json'
        //       },
        //       body:JSON.stringify()
              
        //     });
        //     const jsonData = await response.json();
        //     setOrderData(jsonData);

        //     console.log()
        //   } catch (error) {
        //     console.error('Error fetching data:', error);
        //   }

        try {
          const response = fetch('http://localhost:3007/create-order',{ 
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify({amount:1000})
          }
          );
          const { order_id } = response.data;

          const options = {
              key: 'rzp_test_C4gOH0rUPIp3zB',
              amount: '10000',
              currency: 'INR',
              name: 'Your Company or Product Name',
              description: 'Product or service description',
              order_id: order_id,
              handler: function(response) {
                  alert(`Payment Successful: ${response.razorpay_payment_id}`);
              }
          };

          const rzp1 = new window.Razorpay(options);
          rzp1.open();
      } catch (error) {
          console.error('Payment Error:', error);
      }
    }


    const handlePayLater=async ()=>{
       
        const pickupdate=localStorage.getItem('PickUpDate');
        const pickuptime=localStorage.getItem('PickUpTime');
        let address; 
    if(localStorage.getItem('isManualAddress')){
         address=JSON.parse(localStorage.getItem('manualAddress'));
    }
    else{
        // address=JSON.parse(localStorage.getItem('manualAddress'));
        const locat=JSON.parse(localStorage.getItem('Address'));
        address={
            type:'',
            houseNo:` Latitude :${locat.latitude}, Longitude:${locat.longitude}`,
            street:'',
            landmark:'',
            city:'',
            state:'',
            postalcode:'',
        }
    } 
        const paymentMode='pay later';

        const orderData={
            userId:userid,
            name:Username,
            Service:servtype,
            PickUpDate:pickupdate,
            PickUpTime:pickuptime,
            Address:address,
            PaymentMode:paymentMode,
            price:price 
        }
        fetch(`http://localhost:3007/placeOrder/${userid}`,{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(orderData)
        })
        .then(response=>{
          response.json();
        })
        .then(result=>{
          console.log(result);
        })
        .catch(err=>{
          console.log(err);
        })
        
        // Notification.success('Order Placed successfully...',10000)
        navigate(`/myorders/${userid}`);
        
        localStorage.removeItem('isServiceAdded');
        localStorage.removeItem('orderDetails');
        localStorage.removeItem('PickUpTime');
        localStorage.removeItem('OrderDetails');
        localStorage.removeItem('PickUpDate');
        localStorage.removeItem('Address');
        localStorage.removeItem('manualAddress');
        localStorage.removeItem('isAddressAdded');
        localStorage.removeItem('isManualAddress');
        localStorage.removeItem('useCurrentLoaction');  
    }

    const handleCuponSelection=(code,slash)=>{
      setDiscount(slash);
      setCupon(code);
      setisCuponApplied(true);
      console.log(discount);
      console.log(cupon);
      <Notification>Coupon applied successfully...</Notification>
    }


  return <>
     <ProgressBar/>

     <div className='ordersumm'>
     <div className='orderhead'>Order Summary</div>
     <table>
       
        <tbody>
            <tr >
                <td className='lbl'>Pick up Address</td>
                <td className='val'>{localStorage.getItem('isManualAddress')?
                `
                 ${ManualAddress.type},


                 ${ManualAddress.houseNo},
             
             
                 ${ManualAddress.street},
             
             
                 ${ManualAddress.city},
             
             
                 ${ManualAddress.state},
             
             
                 ${ManualAddress.postalcode}
                 `
                
                :'Using Current Location '}</td>
            </tr>
            <tr>
                <td className='lbl'>Service Added</td>
                <td className='val'>{
                  service.map(serv=>{
                    return  <>
                    <div key={serv.service} style={{fontWeight:'bolder'}}>{serv.service}</div>
                    </>
                  })
                }</td>
            </tr>
            <tr>
                <td className='lbl'>Pick up Date</td>
                <td className='val'>{localStorage.getItem('PickUpDate')}</td>
            </tr>
            <tr>
                <td className='lbl'>Pick up Time</td>
                <td className='val'>{localStorage.getItem('PickUpTime')}</td>
            </tr>
            <tr>
                <td className='lbl'>Order Status</td>
                <td className='val'>{'Pending'}</td>
            </tr>
            <tr>
                <td className='lbl'>Total</td>
                <td className='val'>{
                  service.map(serv=>{
                    return  <>
                    <div key={serv.weight} style={{fontWeight:'bolder'}}>{isCuponApplied?'Cupon Applied':''}  &nbsp;Rs. {serv.weight && !isCuponApplied?(100*(serv.weight))
                    :isCuponApplied && serv.weight*100>=100 && discount===5?serv.weight*100-serv.weight*100*discount/100
                    :isCuponApplied && serv.weight*100>=180 && discount===8?serv.weight*100-serv.weight*100*discount/100
                    :isCuponApplied && serv.weight*100>=250 && discount===10?serv.weight*100-serv.weight*100*discount/100
                    :isCuponApplied && serv.weight*100>=370 && discount===15?serv.weight*100-serv.weight*100*discount/100
                    :alert('This Cupon code is not applicable. Please select another.')
                    }</div>
                    </>
                  })
                }</td>
            </tr>
            <tr>
                <td className='lbl'>Mode of Payment</td>
                <td className='val'>
                <div className="radio-group">
        <label className='radiolabel'>
          <input
            type="radio"
            name="options"
            value="PayNow"
            checked={paymenttype === 'PayNow'}
            onChange={handlepayment}
          />
          Pay Now
        </label>

        <label className='radiolabel'>
          <input
            type="radio"
            name="options"
            value="PayLater"
            checked={paymenttype === 'PayLater'}
            onChange={handlepayment}
          />
          Pay Later
        </label>
        </div>
                </td>
            </tr>
        </tbody>
    </table>
    {
        paymenttype==='PayNow'?<Button appearence="primary"   className='payNow' onClick={handlePayNow}>Pay Now</Button>:<Button  appearence="primary"  className='paylater' onClick={handlePayLater}>Confirm Order</Button>
    }
    
<div className='navbtns'>
    <Link to={`/pickaddress/${userid}`} className='link' style={{textDecoration:'none'}}>
    <div className='previous button'>PREVIOUS</div>
    </Link>
    <div className='cancel button' onClick={handleOrderCancelation}>CANCEL ORDER</div>
</div>
     </div>

     <div className='cuponcodebox'>
      <div className='cuponboxhead'>Apply Cupons</div>
      <div className='cuopncodes'>
    {cupons.map(cp=>{
      return  <div className='cupons' key={cp.discount} onClick={()=>handleCuponSelection(cp.code,cp.discount)}>
            <div className='cuopntitle' value={cp.discount}>
            <div className='cupondisc'>
              <p>
              {cp.discount===5?'This cupon code is applicable on orders above Rs.100'
              :cp.discount===8?"This cupon code is applicable on orders above Rs. 180 "
              :cp.discount===10?"This cupon code is applicable on orders above Rs. 250"
              :"This cupon code is applicable on orders above Rs. 370 "
            }
              </p>
            </div>
              Code - {cp.code}
              <div>Discount - {cp.discount} %</div>
            </div>
           </div>
    })}

      </div>
    </div>

     <Footer/>
  </>
}

export default Confirmpage
