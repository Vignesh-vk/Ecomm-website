import React, { useState } from 'react'
import CountUp from 'react-countup'
import "../Countup/Count.css"
import { TbBrandAuth0 } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegSmileBeam } from "react-icons/fa";
import ScrollTrigger from 'react-scroll-trigger';




const Countup = () => {

    const [Counton, Setcounton] = useState(false)
  return (
    <div className="Countup-number">
        <div className="ourservice">
<ScrollTrigger onEnter={() => Setcounton(true)} onExit={() => Setcounton(false) }>


        
         <h2 className='h2'>OUR SERVICE</h2>
        <div className="countup-detail-delivery">
         <div className="happy-customer-count-up">
            <div className="brand-logo1">
            <TbBrandAuth0 />
            </div>
       
            {Counton  && <CountUp className='Countvalue' start={50} end={80} duration={5}/> }<span> + </span>
        <h6>Brands</h6> 
        
  
         </div>
         <div className="happy-customer-count-up">
         <div className="brand-logo1">
         <TbTruckDelivery />
            </div>
            {Counton && <CountUp className='Countvalue' start={300} end={550} duration={5}/>}
         <span> + </span> 
         <h6> Daily Orders </h6>
            
         </div>
         <div className="happy-customer-count-up">
         <div className="brand-logo1">
         <FaRegSmileBeam />
            </div>
            {Counton && <CountUp className='Countvalue' start={100000} end={140000} duration={5}/> }<span> + </span>  
         <h6> Happy Customers</h6>
            
         </div>

        </div>
        </ScrollTrigger>
    </div>
    </div>
    
  )
}

export default Countup