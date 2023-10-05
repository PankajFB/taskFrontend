import React from 'react'


const Services = () => {
  return <>
     <div>
        <div className='services_head'>Our Services</div>
        <div className='services_box'>
           <div className='service_ele e1'>
            <img src="	https://cdn-icons-png.flaticon.com/128/9816/9816023.png" alt='dry_clean'  className='serviceimg' />
            <div className='servicename'>Dry Cleaning</div>
            <div className='underline'></div>
            <p className='serviceinfo'>
            Entrust your cherished garments to our expert dry cleaning service for a gentle yet thorough rejuvenation.
            </p>
            </div>


            <div className='service_ele e2'>
            <img src="https://cdn-icons-png.flaticon.com/128/9806/9806179.png" alt='dry_clean'  className='serviceimg' />
            <div className='servicename'>Steam Ironing</div>
            <div className='underline'></div>
            <p className='serviceinfo'>
            Discover impeccable creases and polished perfection with our meticulous steam ironing techniques.
            </p>
            </div>


            <div className='service_ele e3'>
            <img src="		https://cdn-icons-png.flaticon.com/128/2230/2230884.png" alt='dry_clean'  className='serviceimg' />
            <div className='servicename'>Premium Laundry</div>
            <div className='underline'></div>
            <p className='serviceinfo'>
            Experience the pinnacle of garment care through our premium laundry service, where attention to detail meets uncompromising quality.
            </p>
            </div>
     </div>
     </div>
  </>
}

export default Services
