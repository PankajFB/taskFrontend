import React from 'react'
import { Link } from 'react-router-dom'

const Downloadapp = () => {
  return <>
     <div className='downloadapp'>
       <div className='downloadimg' >
        <img src="	https://stoffcare.in/static/media/phone1.5eb75c5e5d501a339251.png" alt="phone"  className='phone'/>
        <img src="	https://stoffcare.in/static/media/blob.1edf4fe6f15050e04a1006d40935c08a.svg" alt="bg" className='phone_back' />
       </div>
       <div className='downloadinfo'>
        <div className='d_head'>Download <span>&nbsp;StoffCare </span> &nbsp;App</div>
        <div className='d_info'>
            <p>
            Upgrade your laundry experience with our<span> new app!</span>  Get the convenience of easy scheduling, 
            real-time updates, and <span>affordable pick-up and drop-off </span>at your doorstep.
             No more hassle of traditional laundry services - with just a few taps, you can have your
              clothes cleaned and returned to you in no time. 
              Download now and enjoy a stress-free laundry routine.
            </p>
        </div>

        <div className='download_mode'>
          <a href="https://play.google.com/">
        <img src="	https://stoffcare.in/static/media/playstore.08e55cb409421a296336.png" alt="" className='mode' />

          </a>
          <a href="https://www.apple.com">
        <img src="	https://stoffcare.in/static/media/appstore.610ebf4e8c16b73d7a32.png" alt=""   className='mode'/>
          </a>
        </div>

       </div>
     </div>
  </>
}

export default Downloadapp
